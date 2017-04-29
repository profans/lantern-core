/**
 * Register events declared on Vue components
 * @param  {Vue} Vue  The Vue object.
 * @return {undefined}
 */
export default function install (Vue, events) {
  Vue.mixin({
    created () {
      if (this.$options.events) {
        this.$eventTokens = events.registerChannel(this.$options.events, this)
      }
    },
    beforeDestroy () {
      if (this.$options.events) {
        events.unsubscribeTokens(this.$eventTokens)
      }
    }
  })
}
