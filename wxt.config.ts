import { defineConfig } from 'wxt'

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: 'Big Oh! - A Timer/Stopwatch for CS50',
    description: 'A timer/stopwatch for CS50!',
    permissions: ['scripting', 'storage', 'tabs'],
  },
})
