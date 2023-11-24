
import NewsSource from './NewsSource.vue';

export default {
    title: 'Components/NewsSource',
    component: {NewsSource},
    argTypes: {
        label: String,
  args: Object
    },
  };
  
  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { NewsSource },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<news-source  :args="args"/>',
  });
  export const Web = Template.bind({});
 Web.args = {
    args:{ appName: 'meinestadt',  source: 'Meinestadt', label: 'test'}
  };
  export const Huawei = Template.bind({});
  Huawei.args = {
     args:{ appName: 'meinestadt',  source: 'Meinestadt', label: 'test'}
   };
   export const Oppo = Template.bind({});
   Oppo.args = {
      args:{ appName: 'meinestadt',  source: 'Meinestadt', label: 'test'}
    };
    export const Samsung = Template.bind({});
    Oppo.args = {
       args:{ appName: 'meinestadt',  source: 'Meinestadt', label: 'test'}
     };