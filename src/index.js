import createPlugin from 'tailwindcss/plugin.js'
import theme from './theme.js'

/** @type {import('tailwindcss/types/config').PluginCreator} */
const pluginCreator = (api) => {
  const { theme, matchUtilities, addUtilities } = api;

  const matchUtils = {'animate-delay': {
    css: 'animation-delay',
    values: theme('animationDelays'),
  }, 'animate-duration': {
    css: 'animation-duration',
    values: theme('animationDurations')
  }}

  const addUtils = {
    '.animate-ease': {
      'animation-timing-function': 'ease',
    },
    '.animate-ease-in': {
      'animation-timing-function': 'ease-in' ,
    },
    '.animate-ease-out': {
      'animation-timing-function': 'ease-out' ,
    },
    '.animate-ease-in-out': {
      'animation-timing-function': 'ease-in-out' ,
    },
    '.animate-linear': {
      'animation-timing-function': 'linear' ,
    }
}

  Object.entries(matchUtils).forEach(([name, {css, values}]) => matchUtilities({[name]: (value) => ({[css]: value})}, {values}))
  addUtilities(addUtils)
}
/** @type {import('tailwindcss/types/config').Config} */
const pluginConfig = { theme }

export default createPlugin(pluginCreator, pluginConfig)