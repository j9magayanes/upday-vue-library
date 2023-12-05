// ArticlePage.spec.js
import { mount } from '@vue/test-utils';
import ArticlePage from '../../src/components/ArticlePage/ArticlePage.vue';
import { Web, Huawei, Samsung, Oppo } from '../../src/components/ArticlePage/ArticlePage.stories.js'; 

describe('ArticlePage', () => {
  it('renders with Web state', () => {
    const wrapper = mount(ArticlePage, {
      props: Web.args,
    });   
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.title).toBe('web');
    expect(props.label).toBe('web');
    expect(props.size).toBe('web');
    expect(props.category).toBe('Entertainment');
    expect(props.time).toBe('1d');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
  });

  it('renders with Huawei state', () => {
    const wrapper = mount(ArticlePage, {
      props: Huawei.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.title).toBe('huawei');
    expect(props.label).toBe('huawei');
    expect(props.size).toBe('mobile');
    expect(props.category).toBe('Entertainment');
    expect(props.time).toBe('1d');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
  });
  it('renders with Samsung state', () => {
    const wrapper = mount(ArticlePage, {
      props: Samsung.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.title).toBe('samsung');
    expect(props.label).toBe('samsung');
    expect(props.size).toBe('mobile');
    expect(props.category).toBe('Entertainment');
    expect(props.time).toBe('1d');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
  });
  it('renders with Oppo state', () => {
    const wrapper = mount(ArticlePage, {
      props: Oppo.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.title).toBe('oppo');
    expect(props.label).toBe('oppo');
    expect(props.size).toBe('mobile');
    expect(props.category).toBe('Entertainment');
    expect(props.time).toBe('1d');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
  });

});