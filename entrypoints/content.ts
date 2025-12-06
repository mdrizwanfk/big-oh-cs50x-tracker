export default defineContentScript({
  matches: ['https://cs50.harvard.edu/x/psets/*/*/'],
  main() {
    console.log('Hello content.')
  },
})
