import { defineConfig } from 'wxt'
import tailwindcss from '@tailwindcss/vite'

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  webExt: {
    disabled: true,
  },
  manifest: {
    name: 'Big Oh! - A Timer/Stopwatch for CS50',
    description: 'A timer/stopwatch for CS50!',
    permissions: ['tabs', 'storage', 'scripting'],
    host_permissions: ['https://cs50.harvard.edu/x/psets/*/*/'],
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
})
