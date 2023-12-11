// LogoSource.spec.js
import { mount } from '@vue/test-utils';
import LogoSource from '../../src/components/LogoSource/LogoSource.vue';
import { Huawei, Samsung } from '../../src/components/LogoSource/LogoSource.stories.js'; 

describe('LogoSource', () => {

  it('renders with Huawei state', () => {
    const wrapper = mount(LogoSource, {
      props: Huawei.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.href).toBe('https://www.google.com/');
    expect(props.className).toBe('link');
    expect(props.ariaLabel).toBe('powered');
    expect(props.id).toBe('web');
    expect(props.alt).toBe('logo source')
  });
  it('renders with Samsung state', () => {
    const wrapper = mount(LogoSource, {
      props: Samsung.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.href).toBe('https://www.google.com/');
    expect(props.className).toBe('link');
    expect(props.ariaLabel).toBe('powered');
    expect(props.id).toBe('web');
    expect(props.alt).toBe('logo source')
  });
 
});