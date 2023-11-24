// AdComponent.spec.js
import { mount } from '@vue/test-utils';
import AdComponent from './AdComponent.vue';

describe('AdComponent', () => {
  it('renders correctly', () => {
    const wrapper = mount(AdComponent);
    expect(wrapper.exists()).toBe(true);
  });

  // Add more test cases as needed
});