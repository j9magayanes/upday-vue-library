
import TitleDescription from './TitleDescription.vue';

export default {
    title: 'Components/TitleDescription',
    component: {TitleDescription},
    argTypes: {
        primary: Boolean,
        backgroundColor: String,
        size: String,
        label: String,
        title: String,
        id: String,
        args: Object
    },
  };
  
  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { TitleDescription },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<title-description  :args="args"/>',
  });
  
  export const Web = Template.bind({});
Web.args = {
    label: 'Meinestadt',
    title: 'TN PUSH: A primary school in Chester was put into lockdown after receiving a malicious email. The police launched an investigation into the threats, which were sent to several schools in the north west.',
    size: 'meinestadt',
    id: 'meinestadt',
}
;

export const Samsung = Template.bind({});
Samsung.args = {
    label: 'Meinestadt',
    title: 'TN PUSH: A primary school in Chester was put into lockdown after receiving a malicious email. The police launched an investigation into the threats, which were sent to several schools in the north west.',
    size: 'meinestadt',
    id: 'meinestadt',
}
;
export const Huawei = Template.bind({});
Huawei.args = {
    label: 'Meinestadt',
    title: 'TN PUSH: A primary school in Chester was put into lockdown after receiving a malicious email. The police launched an investigation into the threats, which were sent to several schools in the north west.',
    size: 'meinestadt',
    id: 'meinestadt',
}
;
export const Oppo = Template.bind({});
Oppo.args = {
    label: 'Meinestadt',
    title: 'TN PUSH: A primary school in Chester was put into lockdown after receiving a malicious email. The police launched an investigation into the threats, which were sent to several schools in the north west.',
    size: 'meinestadt',
    id: 'meinestadt',
}
;

