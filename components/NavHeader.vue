<template>
  <header id="header">
    <div id="header-wrap">
      <div class="container">
        <nav class="filter" :class="{ 'nav-is-visible': isCatsVisible }">
          <span class="cat-filter" @click="openCats">
            <span class="filter-text">Kategoria :&nbsp;</span>
            <span class="filter-by">Wybierz</span>
          </span>
          <div class="filter-dropdown">
            <ul class="filter-items">
              <li class="active-x">
                <nuxt-link to="/">Strona główna</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/newsy">Newsy</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/video">Video</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/wywiady">Wywiady</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/politycy">Politycy</nuxt-link>
              </li>
            </ul>
          </div>
        </nav>

        <h1 id="logo">
          <a href="/" title="Jeżyq">
            <img
              class="logo-dark"
              src="~/assets/img/logo.png"
              srcset="~/assets/img/logo.png 1x, ~/assets/img/logo@2x.png 2x"
              alt="Jeżyq"
            />
          </a>
        </h1>

        <div class="actions">
          <div class="actions-wrap">
            <div class="newsletter">
              <a href="#" class="nl-popup-trigger" @click="openNewsletter()">
                <span class="icon-envelope">
                  <svg class="" viewBox="0 0 32 22">
                    <use xlink:href="/ui-icons.svg#envelope-icon"></use>
                  </svg>
                </span>
                <span class="tooltip">Newsletter</span>
              </a>
            </div>

            <div class="search">
              <a href="#" class="search-popup-trigger" @click="openSearch()">
                <span class="icon-search">
                  <svg class="" viewBox="0 0 32 32">
                    <use xlink:href="/ui-icons.svg#search-icon"></use>
                  </svg>
                </span>
                <span class="tooltip">Wyszukaj</span>
              </a>
            </div>

            <div class="menu-btn">
              <a id="mobile-menu-trigger" href="#" @click="openNav()">
                <span class="icon-menu">
                  <svg class="" viewBox="0 0 26 20">
                    <use xlink:href="/ui-icons.svg#hamburger-icon"></use>
                  </svg>
                </span>
                <span class="tooltip">Menu</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// import { mapMutations } from 'vuex'

export default {
  computed: {
    isCatsVisible() {
      return this.$store.state.categoriesVisible
    }
  },
  methods: {
    openCats(e) {
      this.$store.commit('toggleCategories', !this.isCatsVisible)
    },
    openNewsletter() {
      this.$store.commit('toggleNewsletter', true)
    },
    openSearch() {
      this.$store.commit('toggleSearch', true)
    },
    openNav() {
      this.$store.commit('toggleNav', true)
    }
  }
}
</script>
