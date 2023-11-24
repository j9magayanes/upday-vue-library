import ReadMoreButton from './ReadMoreButton.vue';

export default {
    title: 'Components/ReadMoreButton',
    component: {'readmore-button': ReadMoreButton},
    argTypes: {
        label: String,
        args: Object
    },
  };
  
  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {'readmore-button': ReadMoreButton},
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<readmore-button  :args="args"/>',
  });
  export const Web = Template.bind({});
  Web.args = {
    args:{ appName: 'meinestadt',  source: 'Meinestadt', label: 'test', text: "Read more"}
  };
  export const Huawei = Template.bind({});
  Huawei.args = {
    args:{ appName: 'meinestadt',  source: 'Meinestadt', label: 'test', text: "Read more"}
  };
  export const Samsung = Template.bind({});
  Samsung.args = {
    args:{ appName: 'meinestadt',  source: 'Meinestadt', label: 'test', text: "Read more"}
  };
  export const Oppo = Template.bind({});
 Oppo.args = {
    args:{ appName: 'meinestadt',  source: 'Meinestadt', label: 'test', text: "Read more"}
  };
