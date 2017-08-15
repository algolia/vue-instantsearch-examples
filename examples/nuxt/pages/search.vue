<template>
  <ais-index :search-store="searchStore" >
    <ais-search-box></ais-search-box>
    <ais-results>
      <template scope="{ result }">
        <h2>{{ result.name }}</h2>
      </template>
    </ais-results>
  </ais-index>
</template>

<script>
import { createFromAlgoliaCredentials, createFromSerialized } from 'vue-instantsearch'
const searchStore = createFromAlgoliaCredentials('latency', '3d9875e51fbd20c7754e65422f7ce5e1')
searchStore.indexName = 'bestbuy'

export default {
  async asyncData () {
    searchStore.start()
    searchStore.refresh()
    await searchStore.waitUntilInSync()

    const serializedSearchStore = searchStore.serialize()

    return { serializedSearchStore }
  },

  data () {
    return {
      searchStore: null
    }
  },

  created () {
    this.searchStore = createFromSerialized(this.serializedSearchStore)
  }
}
</script>