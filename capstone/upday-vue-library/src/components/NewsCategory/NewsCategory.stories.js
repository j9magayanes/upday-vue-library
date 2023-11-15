
import NewsCategory from './NewsCategory.vue';

export default {
    title: 'Components/NewsCategory',
    component: {NewsCategory},
    argTypes: {
        label: String,
  args: Object
    },
  };
  
  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { NewsCategory },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<news-category  :args="args"/>',
  });
  export const Meinestadt = Template.bind({});
  Meinestadt.args = {
    args:{ appName: 'meinestadt',  category: 'Politik', label: 'test'}
  };