export default defineBackground({
  main() {
    console.log('Hello Background!', { id: browser.runtime.id })
  },
})
