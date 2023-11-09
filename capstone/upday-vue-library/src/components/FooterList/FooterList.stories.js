import FooterList from './FooterList.vue';

export default {
  title: 'Test/FooterList',
  component: FooterList,
  argTypes: {
    items: {
      control: 'array',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FooterList },
  template: '<footer-list :items="items"/>',
});

export const Default = Template.bind({});
Default.args = {
  items:[{name: "Item 1", checked: false, href: "https://www.google.com/"}],
};
