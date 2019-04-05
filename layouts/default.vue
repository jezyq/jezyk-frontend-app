<template>
  <main>
    <newsletter-popup />

    <search-popup />

    <sidetray />

    <div id="wrapper">
      <nav-header />

      <nuxt />

      <nav-footer />

      <div id="scroll-top"></div>
    </div>
  </main>
</template>

<script>
import NewsletterPopup from '~/components/NewsletterPopup.vue'
import SearchPopup from '~/components/SearchPopup.vue'
import NavHeader from '~/components/NavHeader.vue'
import Sidetray from '~/components/Sidetray.vue'
import NavFooter from '~/components/NavFooter.vue'

export default {
  components: {
    NewsletterPopup,
    SearchPopup,
    NavFooter,
    NavHeader,
    Sidetray
  }
}
</script>
