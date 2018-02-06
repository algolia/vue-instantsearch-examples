<template>
  <ais-index :search-store="searchStore">

    <ais-input placeholder="Search for a product..."/>

    <ais-price-range attribute-name="price"></ais-price-range>
    
    <ais-refinement-list attribute-name="colors"></ais-refinement-list>

    <ais-tree-menu :attributes="['category', 'sub_category']">
      <h3 slot="header">Browse by</h3>
    </ais-tree-menu>
    
    <ais-results>
      <template slot-scope="{ result }">
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
    queryParameters: {
      type: Object,
      default: '',
    },
  },
  created() {
    this.searchStore.queryParameters = this.queryParameters;
  },
  data() {
    return {
      searchStore,
    };
  },
  watch: {
    'searchStore.queryParameters'(parameters) {
      const query = parameters;
      delete query.index;

      this.$router.push({
        name: 'search',
        query,
      });
    },
  },
};</script>
