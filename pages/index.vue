<template>
  <section class="page-wrapper">
    <newsletter-popup />
    <search-popup />
    <sidetray />
    <div id="wrapper">
      <nav-header />
      <logo />
    </div>
  </section>
</template>

<script>
import NewsletterPopup from '~/components/NewsletterPopup.vue'
import SearchPopup from '~/components/SearchPopup.vue'
import NavHeader from '~/components/NavHeader.vue'
import Sidetray from '~/components/Sidetray.vue'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    NewsletterPopup,
    SearchPopup,
    NavHeader,
    Sidetray,
    Logo
  }
}
</script>
