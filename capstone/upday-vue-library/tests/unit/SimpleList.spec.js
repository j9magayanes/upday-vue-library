// AdComponent.spec.js
import { mount } from '@vue/test-utils';
import SimpleList from '../../src/components/SimpleList/SimpleList.vue';
import { Web, Huawei, Samsung, Oppo } from '../../src/components/SimpleList/SimpleList.stories.js'; 

describe('YourComponent', () => {
  it('renders with Web state', () => {
    const wrapper = mount(AdComponent, {
      props: Web.args,
    });
    expect(wrapper.exists()).toBe(true);
    // Add assertions based on the Web state of the component
    // ...
  });

  it('renders with Huawei state', () => {
    const wrapper = mount(AdComponent, {
      props: Huawei.args,
    });
    expect(wrapper.exists()).toBe(true);
    // Add assertions based on the Huawei state of the component
    // ...
  });
  it('renders with Samsung state', () => {
    const wrapper = mount(AdComponent, {
      props: Samsung.args,
    });
    expect(wrapper.exists()).toBe(true);
    // Add assertions based on the Huawei state of the component
    // ...
  });
  it('renders with Oppo state', () => {
    const wrapper = mount(AdComponent, {
      props: Oppo.args,
    });
    expect(wrapper.exists()).toBe(true);
    // Add assertions based on the Huawei state of the component
    // ...
  });
  // Add more test cases for other states as needed
});