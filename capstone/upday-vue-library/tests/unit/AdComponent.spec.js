// AdComponent.spec.js
import { mount } from '@vue/test-utils';
import AdComponent from '../../src/components/AdComponent/AdComponent.vue';
import { Web, Huawei, Samsung, Oppo } from '../../src/components/AdComponent/AdComponent.stories.jsx'; 

describe('AdComponent', () => {
  it('renders with Web state', () => {
    const wrapper = mount(AdComponent, {
      props: Web.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.title).toBe('web');
    expect(props.label).toBe('Web');
    expect(props.size).toBe('web');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
    expect(props.id).toBe('web');
    expect(props.alt).toBe('advertisement')
    expect(props.aria).toBe('advertisement')
  });

  it('renders with Huawei state', () => {
    const wrapper = mount(AdComponent, {
      props: Huawei.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true); 
    expect(props.title).toBe('huawei');
    expect(props.label).toBe('huawei');
    expect(props.size).toBe('mobile');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
    expect(props.id).toBe('huawei');
    expect(props.alt).toBe('advertisement')
    expect(props.aria).toBe('advertisement')
  });
  it('renders with Samsung state', () => {
    const wrapper = mount(AdComponent, {
      props: Samsung.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.title).toBe('samsung');
    expect(props.label).toBe('samsung');
    expect(props.size).toBe('mobile');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
    expect(props.id).toBe('samsung');
    expect(props.alt).toBe('advertisement')
    expect(props.aria).toBe('advertisement')
  });
  it('renders with Oppo state', () => {
    const wrapper = mount(AdComponent, {
      props: Oppo.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.title).toBe('oppo');
    expect(props.label).toBe('oppo');
    expect(props.size).toBe('mobile');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
    expect(props.id).toBe('oppo');
    expect(props.alt).toBe('advertisement')
    expect(props.aria).toBe('advertisement')
  });
});