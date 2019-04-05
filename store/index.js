export const state = () => ({
  categoriesVisible: false,
  newsletterVisible: false,
  searchVisible: false,
  navVisible: false
})

export const mutations = {
  toggleCategories(state, payload) {
    state.categoriesVisible = payload
  },
  toggleNewsletter(state, payload) {
    state.newsletterVisible = payload
  },
  toggleSearch(state, payload) {
    state.searchVisible = payload
  },
  toggleNav(state, payload) {
    state.navVisible = payload
  }
}
