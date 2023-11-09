
import HeaderSource from './HeaderSource.vue';

export default {
    title: 'Test/HeaderSource',
    component: {HeaderSource},
    argTypes: {
        label: String,
  args: Object
    },
  };
  
  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { HeaderSource },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<header-source  :args="args"/>',
  });
  export const Meinestadt = Template.bind({});
  Meinestadt.args = {
    args:{ appName: 'meinestadt',  source: 'Meinestadt', label: 'test'}
  };