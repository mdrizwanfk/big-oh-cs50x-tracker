import { type ContentScriptContext, storage } from '#imports'
import { createRoot } from 'react-dom/client'

import Stopwatch from './Stopwatch'

import './content.css'

export default defineContentScript({
  matches: ['https://cs50.harvard.edu/x/psets/*/*/'],
  cssInjectionMode: 'ui',
  async main(ctx) {
    const ui = await createUi(ctx)
    ui.mount()
  },
})

function createUi(ctx: ContentScriptContext) {
  return createShadowRootUi(ctx, {
    name: 'tailwind-shadow-root-example',
    position: 'inline',
    anchor: 'body',
    append: 'first',
    onMount: (container) => {
      // Container is a body, and React warns when creating a root on the body, so create a wrapper div
      const app = document.createElement('div')
      app.className = 'fixed top-0 right-0 pointer-events-none z-[9999]'
      container.append(app)

      // Create a root on the UI container and render a component
      const root = createRoot(app)
      root.render(<Stopwatch />)
      return root
    },
  })
}
