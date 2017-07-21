<template>
  <ais-index :searchStore="searchStore">
    <ais-search-box placeholder="Find products"/>
    <ul>
      <ais-results>
        <template scope="{ result }">
          <li>
            <ais-highlight :result="result" attribute-name="name"></ais-highlight>
          </li>
        </template>
      </ais-results>
    </ul>
  </ais-index>
</template>
<script>
import {
  createFromAlgoliaCredentials,
  createFromSerialized,
} from 'vue-instantsearch';

let store;

export default {
  name: 'search',
  asyncData({ context, route }) {
    store = createFromAlgoliaCredentials(
      'latency',
      '6be0576ff61c053d5f9a3225e2a90f76'
    );

    store.indexName = 'ikea';
    store.query = route.params.query ? route.params.query : '';
    store.highlightPreTag = '<mark>';
    store.highlightPostTag = '</mark>';
    store.start();

    return store.waitUntilInSync().then(() => {
      context.state = {
        searchStore: store.serialize(),
      };
    });
  },
  beforeMount() {
    if (!window.__INITIAL_STATE__) {
      throw new Error('Not state was found.');
    }

    this.searchStore = createFromSerialized(
      window.__INITIAL_STATE__.searchStore
    );
  },
  watch: {
    $route(to, from) {
      this.searchStore.query = this.$route.params.query ? this.$route.params.query : '';
    },
    'searchStore.query'(to, from) {
      if (to.length === 0) {
        this.$router.push({ name: 'home' });
      } else {
        this.$router.push({ name: 'search', params: { query: to } });
      }
    },
  },
  mounted() {
    // this.searchStore.start();
  },
  data() {
    return {
      searchStore: store,
    };
  },
};
</script>
