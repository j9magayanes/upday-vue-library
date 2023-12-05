// AdImage.spec.js
import { mount } from '@vue/test-utils';
import AdImage from '../../src/components/AdImage/AdImage.vue';
import { Web, Huawei, Samsung, Oppo } from '../../src/components/AdImage/AdImage.stories.js'; 

describe('AdImage', () => {
  it('renders with Web state', () => {
    const wrapper = mount(AdImage, {
      props: Web.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.label).toBe('web');
    expect(props.size).toBe('web');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
  });

  it('renders with Huawei state', () => {
    const wrapper = mount(AdImage, {
      props: Huawei.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.label).toBe('huawei');
    expect(props.size).toBe('mobile');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
  });
  it('renders with Samsung state', () => {
    const wrapper = mount(AdImage, {
      props: Samsung.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.label).toBe('Samsung');
    expect(props.size).toBe('mobile');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
  });
  it('renders with Oppo state', () => {
    const wrapper = mount(AdImage, {
      props: Oppo.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.label).toBe('huawei');
    expect(props.size).toBe('mobile');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
  });
  // Add more test cases for other states as needed
});