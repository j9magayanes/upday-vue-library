// src/stories/TabItemComponent.stories.js
import TabItemComponent from './TabItemComponent.vue';

export default {
  title: 'TabItemComponent',
  component: TabItemComponent,
};

// Create a template for your stories
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TabItemComponent },
  template: '<tab-item-component :args=args />',
});

// Default story
export const Default = Template.bind({});
Default.args = {
  name: 'Default Tab',
  selected: false,
};

// Another story
export const SelectedTab = Template.bind({});
SelectedTab.args = {
  name: 'Selected Tab',
  selected: true,
};
