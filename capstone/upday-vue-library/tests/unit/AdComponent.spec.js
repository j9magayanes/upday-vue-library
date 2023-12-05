// AdComponent.spec.js
import { mount } from '@vue/test-utils';
import AdComponent from '../../src/components/AdComponent/AdComponent.vue';
import { Web, Huawei, Samsung, Oppo } from '../../src/components/AdComponent/AdComponent.stories.jsx'; 

describe('AdComponent', () => {
  it('renders with Web state', () => {
    const wrapper = mount(AdComponent, {
      props: Web.args,
    });
    expect(wrapper.exists()).toBe(true);
    const props = wrapper.props();

    // Assert specific props based on the Web state
    expect(props.title).toBe('web');
    expect(props.label).toBe('Web');
    expect(props.size).toBe('web');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
    // Add more assertions as needed
    // Add assertions based on the Web state of the component
    // ...
  });

  it('renders with Huawei state', () => {
    const wrapper = mount(AdComponent, {
      props: Huawei.args,
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.exists()).toBe(true);
    const props = wrapper.props();

    // Assert specific props based on the Web state
    expect(props.title).toBe('huawei');
    expect(props.label).toBe('huawei');
    expect(props.size).toBe('mobile');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
    // Add assertions based on the Huawei state of the component
    // ...
  });
  it('renders with Samsung state', () => {
    const wrapper = mount(AdComponent, {
      props: Samsung.args,
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.exists()).toBe(true);
    const props = wrapper.props();

    // Assert specific props based on the Web state
    expect(props.title).toBe('samsung');
    expect(props.label).toBe('samsung');
    expect(props.size).toBe('mobile');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
    // Add assertions based on the Huawei state of the component
    // ...
  });
  it('renders with Oppo state', () => {
    const wrapper = mount(AdComponent, {
      props: Oppo.args,
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.exists()).toBe(true);
    const props = wrapper.props();

    // Assert specific props based on the Web state
    expect(props.title).toBe('oppo');
    expect(props.label).toBe('oppo');
    expect(props.size).toBe('mobile');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
    // Add assertions based on the Huawei state of the component
    // ...
  });
  // Add more test cases for other states as needed
});