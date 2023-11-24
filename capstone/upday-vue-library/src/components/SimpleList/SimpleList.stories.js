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

export const Web = Template.bind({});
Web.args = {
  items: '[{"name": "Item 1", "href": "https://example.com/item1"}, {"name": "Item 2", "href": "https://example.com/item2"}]'
  ,
};

export const Huawei = Template.bind({});
Huawei.args = {
  items: '[{"name": "Item 1", "href": "https://example.com/item1"}, {"name": "Item 2", "href": "https://example.com/item2"}]'
  ,
};
export const Oppo = Template.bind({});
Oppo.args = {
  items: '[{"name": "Item 1", "href": "https://example.com/item1"}, {"name": "Item 2", "href": "https://example.com/item2"}]'
  ,
};
export const Samsung = Template.bind({});
Samsung.args = {
  items: '[{"name": "Item 1", "href": "https://example.com/item1"}, {"name": "Item 2", "href": "https://example.com/item2"}]'
  ,
};