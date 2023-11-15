import TestList from './TestList.vue';

export default {
  title: 'Components/TestList',
  component: TestList,
  argTypes: {
    items: {
      control: 'array',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TestList },
  template: '<test-list :items="items" @toggleItem="toggleItem" @removeItem="removeItem" />',
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { text: 'Item 1', checked: false, event: function() {
        alert('test');
      } },
    { text: 'Item 2', checked: true,  event: function() {
        alert('test');
      } },
    { text: 'Item 3', checked: false,  event: function() {
        alert('test');
      } },
    { text: 'Item 4', checked: false,  event:function() {
        alert('test');
      } },
  ],
};
