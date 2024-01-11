import FooterList from './FooterList.vue';

export default {
  title: 'Components/FooterList',
  component: FooterList,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FooterList },
  template: '<footer-list  v-bind="args"/>',
});

export const Web = { args : {

  items:  '[{"name": "Privacy Policy", "href": "http://localhost:3000/privacy_policy#26fc5702-5d0a-4b14-8135-4bc49ff2fa49"}, {"name": "Privacy Settings", "callback": ""}, {"name": "Imprint", "href": "http://localhost:3000/imprint"}]',
  
}};