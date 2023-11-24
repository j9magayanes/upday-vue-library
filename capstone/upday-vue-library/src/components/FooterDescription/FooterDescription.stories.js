import FooterDescription from './FooterDescription.vue';

export default {
  title: 'Components/FooterDescription',
  component: FooterDescription,
  argTypes: {
    items: {
      control: 'array',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FooterDescription },
  template: '<footer-description :items="items" @toggleItem="toggleItem" @removeItem="removeItem" />',
});

export const Web = Template.bind({});
Web.args = {
  items: [
    { text: 'Item 1', href: "https://www.google.com/",  checked: false, event: function() {
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

export const Huawei = Template.bind({});
Huawei.args = {
  items: [
    { text: 'Item 1', href: "https://www.google.com/",  checked: false, event: function() {
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

export const Oppo = Template.bind({});
Oppo.args = {
  items: [
    { text: 'Item 1', href: "https://www.google.com/",  checked: false, event: function() {
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

export const Samsung = Template.bind({});
Samsung.args = {
  items: [
    { text: 'Item 1', href: "https://www.google.com/",  checked: false, event: function() {
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

