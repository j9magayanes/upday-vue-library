// HeaderImage.spec.js
import { mount } from '@vue/test-utils';
import HeaderImage from '../../src/components/HeaderImage/HeaderImage.vue';
import { Web, Huawei, Samsung, Oppo } from '../../src/components/HeaderImage/HeaderImage.stories.js'; 

describe('HeaderImage', () => {
  it('renders with Web state', () => {
    const wrapper = mount(HeaderImage, {
      props: Web.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.label).toBe('web');
    expect(props.size).toBe('web');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
    expect(props.id).toBe('web');
    expect(props.alt).toBe('header image')
    expect(props.aria).toBe('header image')
  });

  it('renders with Huawei state', () => {
    const wrapper = mount(HeaderImage, {
      props: Huawei.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.label).toBe('huawei');
    expect(props.size).toBe('mobile');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
    expect(props.id).toBe('huawei');
    expect(props.alt).toBe('header image');
    expect(props.aria).toBe('header image');
  });
  it('renders with Samsung state', () => {
    const wrapper = mount(HeaderImage, {
      props: Samsung.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.label).toBe('samsung');
    expect(props.size).toBe('mobile');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
    expect(props.id).toBe('samsung');
    expect(props.alt).toBe('header image')
    expect(props.aria).toBe('header image')
  });
  it('renders with Oppo state', () => {
    const wrapper = mount(HeaderImage, {
      props: Oppo.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.label).toBe('oppo');
    expect(props.size).toBe('mobile');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
    expect(props.id).toBe('oppo');
    expect(props.alt).toBe('header image')
    expect(props.aria).toBe('header image')
  });
  // Add more test cases for other states as needed
});