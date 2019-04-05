<template>
  <div
    class="search-popup"
    :class="{ 'is-visible': isSearchVisible }"
    @click="closeSearch()"
  >
    <div class="search-popup-container" @click.stop>
      <form
        id="search-popup-form"
        class="search-popup-form"
        method="post"
        @submit.prevent="search()"
      >
        <input
          id="search-popup"
          v-model="query"
          class="form-control"
          type="text"
          name="searchpopup"
          value=""
          placeholder="Wyszukaj..."
        />
        <input
          id="search-popup-submit"
          class="btn"
          type="submit"
          value="Submit"
          disabled
        />
      </form>
      <h5 class="cat-list-title">lub wybierz kategorię</h5>
      <ul class="cat-list">
        <li class="cat-list-item">
          <nuxt-link to="/newsy">Newsy</nuxt-link>
        </li>
        <li class="cat-list-item">
          <nuxt-link to="/video">Video</nuxt-link>
        </li>
        <li class="cat-list-item">
          <nuxt-link to="/wywiady">Wywiady</nuxt-link>
        </li>
        <li class="cat-list-item">
          <nuxt-link to="/politycy">Politycy</nuxt-link>
        </li>
      </ul>
    </div>
    <a href="#" class="search-popup-close">
      <i>
        <svg viewBox="0 0 24 24">
          <use xlink:href="/ui-icons.svg#close-icon"></use>
        </svg>
      </i>
    </a>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      query: ''
    }
  },
  computed: {
    isSearchVisible() {
      return this.$store.state.searchVisible
    }
  },
  methods: {
    closeSearch() {
      this.$store.commit('toggleSearch', false)
    },
    search() {
      console.log(this.query)
      this.closeSearch()
    }
  }
}
</script>
