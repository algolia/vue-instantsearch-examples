<template>
  <ais-index :search-store="searchStore">
    <ais-search-box></ais-search-box>
    <ais-results>
      <div slot-scope="{ result }" class="result">
        <h2><ais-highlight :result="result" attribute-name="name"></ais-highlight></h2>
        <p>{{result.shortDescription}}</p>
        <img :src="result.image" :alt="'image of ' + result.name">
      </div>
    </ais-results>
  </ais-index>
</template>

<style>
html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}
</style>

<script>
import InstantSearch, {
  createFromAlgoliaCredentials,
  createFromSerialized,
} from "vue-instantsearch";

const searchStore = createFromAlgoliaCredentials(
  "latency",
  "3d9875e51fbd20c7754e65422f7ce5e1"
);
searchStore.indexName = "bestbuy";

searchStore.highlightPreTag = "<mark>";
searchStore.highlightPostTag = "</mark>";

export default {
  async asyncData() {
    searchStore.start();
    searchStore.refresh();
    await searchStore.waitUntilInSync();

    const serializedSearchStore = searchStore.serialize();

    return { serializedSearchStore };
  },

  data() {
    return {
      searchStore: null,
    };
  },

  created() {
    this.searchStore = createFromSerialized(this.serializedSearchStore);
  },
};
</script>
