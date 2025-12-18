import { defineConfig } from 'wxt'
import tailwindcss from '@tailwindcss/vite'

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  webExt: {
    disabled: true,
  },
  manifest: {
    name: 'Big Oh! - Track CS50x psets',
    description:
      'Stopwatch functionality for CS50 problem sets, helping you track your time while working on assignments.',
    permissions: ['tabs', 'storage', 'scripting'],
    host_permissions: ['https://cs50.harvard.edu/x/psets/*/*/'],
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
})
