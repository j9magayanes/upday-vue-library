import FooterList from './FooterList.vue';

export default {
  title: 'Components/FooterList',
  component: FooterList,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FooterList },
  template: '<footer-list :items="items"/>',
});

export const Web = Template.bind({});
Web.args = {
  items: '[{"name": "Privacy Policy", "href": "http://localhost:3000/privacy_policy#26fc5702-5d0a-4b14-8135-4bc49ff2fa49"}, {"name": "Privacy Settings", "callback": ""}, {"name": "Imprint", "href": "http://localhost:3000/imprint"}]',
};

export const Huawei = Template.bind({});
Huawei.args = {
  items: '[{"name": "Privacy Policy", "href": "http://localhost:3000/privacy_policy#26fc5702-5d0a-4b14-8135-4bc49ff2fa49"}, {"name": "Privacy Settings", "callback": ""}, {"name": "Imprint", "href": "http://localhost:3000/imprint"}]',
};

export const Oppo = Template.bind({});
Oppo.args = {
  items: '[{"name": "Privacy Policy", "href": "http://localhost:3000/privacy_policy#26fc5702-5d0a-4b14-8135-4bc49ff2fa49"}, {"name": "Privacy Settings", "callback": ""}, {"name": "Imprint", "href": "http://localhost:3000/imprint"}]',
};

export const Samsung = Template.bind({});
Samsung.args = {
  items: '[{"name": "Privacy Policy", "href": "http://localhost:3000/privacy_policy#26fc5702-5d0a-4b14-8135-4bc49ff2fa49"}, {"name": "Privacy Settings", "callback": ""}, {"name": "Imprint", "href": "http://localhost:3000/imprint"}]',
};