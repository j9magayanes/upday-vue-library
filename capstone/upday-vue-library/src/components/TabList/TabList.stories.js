import { action } from '@storybook/addon-actions';
import TabList from './TabList.vue';

export default {
  title: 'TabList',
  component: TabList,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TabList },
  template: '<tab-list v-bind="$props"><h1>{{ text }}</h1></tab-list>',
  methods: {
    handlePointerDown: action('pointer-down'),
  },
});

export const Default = Template.bind({});
Default.args = {
  classList: 'active',
  classLink: 'element-with-ripple',
  refLink: 'your-ref-link',
  ariaLabel: 'Your Aria Label',
  href: '#',
  role: 'your-role',
  text: 'Your Tab Name',
  isActive: true,
  active: 'true'

};

export const Inactive = Template.bind({});
Inactive.args = {
  classList: 'active',
  classLink: 'element-with-ripple',
  refLink: 'your-ref-link',
  ariaLabel: 'Your Aria Label',
  href: '#',
  role: 'your-role',
  text: 'Your Tab Name',
  isActive: false,
  active: 'false'

};

