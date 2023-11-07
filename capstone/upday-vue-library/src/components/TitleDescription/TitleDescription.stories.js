
 import TitleDescription  from './TitleDescription.vue' // Assuming imageComponent is a global component
  

export default {
    title: 'Example/TitleDescription',

    argTypes: {
        label: String,
        src: String,
        args: Object,
    },
  };
  
  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    component: {TitleDescription},
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<title-description  :args="args" />',
  });
  
  export const Web = Template.bind({});
  Web.args = {
    label: 'meinestadt',
    title: 'meinestadt'
 }
  ;
