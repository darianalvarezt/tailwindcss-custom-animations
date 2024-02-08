import { generatePluginCss } from './utils.js'
import { describe, it, expect } from 'vitest'

describe('tailwindcss-custom-animations plugin',  () => {
  it('use a predefined animation', async () => {
    const postcss = await generatePluginCss({
      content: '<div class="animate-zoom-in">Hello!</div>'
    })

    expect(postcss).toMatch('@keyframes zoom-in{0%{opacity:0;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}.animate-zoom-in{animation:zoom-in 0.6s ease-out}')
  })

  it('use a predefined animation with delay', async () => {
    const postcss = await generatePluginCss({
      content: '<div class="animate-delay-100">Hello!</div>'
    })

    expect(postcss).toMatch('.animate-delay-100{animation-delay:100ms}')
  })

  it('use a predefined animation with custom delay', async () => {
    const postcss = await generatePluginCss({
      content: '<div class="animate-delay-[0.6ms]">Hello!</div>'
    })

    expect(postcss).toMatch('.animate-delay-\\[0\\.6ms\\]{animation-delay:0.6ms}')
  })

  
  it('use a predefined animation with duration', async () => {
    const postcss = await generatePluginCss({
      content: '<div class="animate-duration-very-fast">Hello!</div>'
    })

    expect(postcss).toMatch('.animate-duration-very-fast{animation-duration:100ms}')
  })

  it('use a predefined animation with custom duration', async () => {
    const postcss = await generatePluginCss({
      content: '<div class="animate-duration-[0.6ms]">Hello!</div>'
    })

    expect(postcss).toMatch('.animate-duration-\\[0\\.6ms\\]{animation-duration:0.6ms}')
  })

  it('use a predefined timing function animation', async () => {
    const postcss = await generatePluginCss({
      content: '<div class="animate-linear">Hello!</div>'
    })

    expect(postcss).toMatch('.animate-linear{animation-timing-function:linear}')
  })
})