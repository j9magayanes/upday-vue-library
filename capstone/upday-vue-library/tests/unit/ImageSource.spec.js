// ImageSource.spec.js
import { mount } from '@vue/test-utils';
import ImageSource from '../../src/components/ImageSource/ImageSource.vue';
import { Web, Huawei, Samsung, Oppo } from '../../src/components/ImageSource/ImageSource.stories.js'; 

describe('ImageSource', () => {
  it('renders with Web state', () => {
    const wrapper = mount(ImageSource, {
      props: Web.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.credit).toBe('web');
  });

  it('renders with Huawei state', () => {
    const wrapper = mount(ImageSource, {
      props: Huawei.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.credit).toBe('huawei');
  });
  it('renders with Samsung state', () => {
    const wrapper = mount(ImageSource, {
      props: Samsung.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.credit).toBe('samsung');
  });
  it('renders with Oppo state', () => {
    const wrapper = mount(ImageSource, {
      props: Oppo.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.credit).toBe('oppo');
  });
  // Add more test cases for other states as needed
});