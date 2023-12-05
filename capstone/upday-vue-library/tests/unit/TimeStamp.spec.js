// AdComponent.spec.js
import { mount } from '@vue/test-utils';
import TimeStamp from '../../src/components/TimeStamp/TimeStamp.vue';
import { Web, Huawei, Samsung, Oppo } from '../../src/components/TimeStamp/TimeStamp.stories.js'; 

describe('YourComponent', () => {
  it('renders with Web state', () => {
    const wrapper = mount(TimeStamp, {
      props: Web.args,
    });
    expect(wrapper.exists()).toBe(true);
    // Add assertions based on the Web state of the component
    // ...
  });

  it('renders with Huawei state', () => {
    const wrapper = mount(TimeStamp, {
      props: Huawei.args,
    });
    expect(wrapper.exists()).toBe(true);
    // Add assertions based on the Huawei state of the component
    // ...
  });
  it('renders with Samsung state', () => {
    const wrapper = mount(TimeStamp, {
      props: Samsung.args,
    });
    expect(wrapper.exists()).toBe(true);
    // Add assertions based on the Huawei state of the component
    // ...
  });
  it('renders with Oppo state', () => {
    const wrapper = mount(TimeStamp, {
      props: Oppo.args,
    });
    expect(wrapper.exists()).toBe(true);
    // Add assertions based on the Huawei state of the component
    // ...
  });
  // Add more test cases for other states as needed
});