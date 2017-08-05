<template>
  <ais-index :search-store="searchStore" :query="query">
    <ais-input placeholder="Search for a product..."/>
    <ais-results>
      <template scope="{ result }">
        <h2>{{ result.name }}</h2>
      </template>
    </ais-results>
  </ais-index>
</template>

<script>
import { createFromAlgoliaCredentials } from 'vue-instantsearch';

const searchStore = createFromAlgoliaCredentials(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);
searchStore.indexName = 'ikea';

export default {
  props: {
    query: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      searchStore,
    };
  },
  watch: {
    'searchStore.query'(value) {
      this.$router.push({
        name: 'search',
        query: { q: value },
      });
    },
  },
};
</script>
