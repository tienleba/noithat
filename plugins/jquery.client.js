import jQuery from 'jquery'

export default defineNuxtPlugin(() => {
  if (process.client) {
    window.$ = jQuery
    window.jQuery = jQuery
  }
})