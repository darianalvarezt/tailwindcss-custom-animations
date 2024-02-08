import tailwindcss from 'tailwindcss'
import postcss from 'postcss'
import minify from '@csstools/postcss-minify'

import animationsPlugin from '../src/index.js'

const TAILWIND = '@tailwind utilities;'

export function generatePluginCss(options = {}) {
  const {inline = '', content = ''} = options;

  return postcss([
    minify(),
    tailwindcss({
      plugins: [animationsPlugin],
      content: [{ raw: content }]
    })
  ])
  .process(`${TAILWIND} ${inline}`, { from: undefined })
  .then((result) => result.css)
}