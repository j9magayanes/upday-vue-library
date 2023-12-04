import LogoSource from './LogoSource.vue'

export default {
  title: 'Components/LogoSource',
  component: LogoSource,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {
      LogoSource
    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      // Story args can be spread into the returned object
      return {
        ...args
      }
    },
    // Then, the spread values can be accessed directly in the template
    template: '<logo-source v-bind="args">'
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen'
  }
}



export const Huawei = {
  args: {
   href: "https://www.google.com/",
   className: "link",
   ariaLabel: "powered"
  }
}

export const Samsung = {
  args: {
    href: "https://www.google.com/",
    className: "link",
    ariaLabel: "powered"
  }
}
