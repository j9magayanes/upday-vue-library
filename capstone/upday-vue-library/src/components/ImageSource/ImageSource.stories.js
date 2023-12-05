import ImageSource from './ImageSource.vue'

export default {
  title: 'Components/ImageSource',
  component: ImageSource,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {
        ImageSource
    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      // Story args can be spread into the returned object
      return {
        ...args
      }
    },
    // Then, the spread values can be accessed directly in the template
    template: '<image-source v-bind="args">'
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen'
  }
}

export const Web = {
  args: {
    credit: "Web"
  }
}

export const Huawei = {
  args: {
    credit: "Huawei"
  }
}

export const Samsung = {
  args: {
    credit: "Samsung"
  }
}

export const Oppo = {
  args: {
    credit: "Oppo"
  }
}
