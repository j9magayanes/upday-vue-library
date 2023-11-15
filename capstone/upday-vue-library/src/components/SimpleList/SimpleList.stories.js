import SimpleList from './SimpleList.vue';

export default {
  title: 'Components/SimpleList',
  component: SimpleList,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SimpleList },
  template: '<simple-list :items="items"/>',
});

export const Default = Template.bind({});
Default.args = {
  items: '[{"name": "Item 1", "href": "https://example.com/item1"}, {"name": "Item 2", "href": "https://example.com/item2"}]'
  ,
};
