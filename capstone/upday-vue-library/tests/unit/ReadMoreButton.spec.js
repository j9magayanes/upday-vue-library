// ReadMore.spec.js
import { mount } from '@vue/test-utils';
import ReadMoreButton from '../../src/components/ReadMoreButton/ReadMoreButton.vue';
import { Web, Huawei, Samsung, Oppo } from '../../src/components/ReadMoreButton/ReadMoreButton.stories.js'; 

describe('YourComponent', () => {
  it('renders with Web state', () => {
    const wrapper = mount(ReadMoreButton, {
      props: Web.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.appName).toBe('meinestadt');
    expect(props.source).toBe('meinestadt');
    expect(props.label).toBe('test');
    expect(props.text).toBe('Read more');
  });

  it('renders with Huawei state', () => {
    const wrapper = mount(ReadMoreButton, {
      props: Huawei.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.appName).toBe('meinestadt');
    expect(props.source).toBe('meinestadt');
    expect(props.label).toBe('test');
    expect(props.text).toBe('Read more');
  });
  it('renders with Samsung state', () => {
    const wrapper = mount(ReadMoreButton, {
      props: Samsung.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.appName).toBe('meinestadt');
    expect(props.source).toBe('meinestadt');
    expect(props.label).toBe('test');
    expect(props.text).toBe('Read more');
  });
  it('renders with Oppo state', () => {
    const wrapper = mount(ReadMoreButton, {
      props: Oppo.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.appName).toBe('meinestadt');
    expect(props.source).toBe('meinestadt');
    expect(props.label).toBe('test');
    expect(props.text).toBe('Read more');
  });
});