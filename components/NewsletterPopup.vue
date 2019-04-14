<template>
  <div
    class="nl-popup"
    :class="{ 'is-visible': isNewsletterVisible }"
    @click="closeNewsletter()"
  >
    <div class="nl-popup-container" @click.stop>
      <h2 class="nl-title">Dołącz do nas</h2>
      <hr class="sep accent" />
      <p class="nl-sub-title">
        Dołącz do newslettera by być powiadamianym o&nbsp;nowościach na stronie.
      </p>

      <form
        id="nl-popup-form"
        class="nl-popup-form"
        method="post"
        @submit.prevent="joinNewsletter"
      >
        <div class="form-group">
          <input
            id="input-email-signup"
            v-model="email"
            class="form-control"
            type="email"
            name="EmailAddress"
            value=""
            placeholder="Twój adres email"
          />

          <button id="nl-popup-submit" class="btn" type="submit">
            <i>
              <svg class="" viewBox="0 0 20 10">
                <use xlink:href="/ui-icons.svg#arrow-right-small-icon"></use>
              </svg>
            </i>
          </button>
        </div>
      </form>
    </div>
    <a href="#" class="nl-popup-close" @click="closeNewsletter()">
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
      email: ''
    }
  },
  computed: {
    isNewsletterVisible() {
      return this.$store.state.newsletterVisible
    }
  },
  methods: {
    closeNewsletter() {
      this.$store.commit('toggleNewsletter', false)
    },
    joinNewsletter() {
      console.log(this.email)
      this.email = ''
      this.closeNewsletter()
    }
  }
}
</script>
