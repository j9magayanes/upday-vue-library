import ReadButton from './ReadButton.vue';

export default {
    title: 'Components/ReadButton',
    component: {ReadButton},
    argTypes: {
        label: String,
  args: Object
    },
  };
  
  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ReadButton },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<read-button  :args="args"/>',
  });
  export const Meinestadt = Template.bind({});
  Meinestadt.args = {
    args:{ appName: 'meinestadt',  source: 'Meinestadt', label: 'test', text: "Read more"}
  };