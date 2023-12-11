// ArticleCard.spec.js
import { mount } from '@vue/test-utils';
import ArticleCard from '../../src/components/ArticleCard/ArticleCard.vue';
import { Web, Huawei, Samsung, Oppo } from '../../src/components/ArticleCard/ArticleCard.stories.jsx'; 

describe('ArticleCard', () => {
  it('renders with Web state', () => {
    const wrapper = mount(ArticleCard, {
      props: Web.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.title).toBe('web');
    expect(props.label).toBe('Web');
    expect(props.size).toBe('web');
    expect(props.category).toBe('Politik');
    expect(props.time).toBe('1d');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
    expect(props.id).toBe('web');
    expect(props.alt).toBe('article card')
    expect(props.aria).toBe('article card')
  });

  it('renders with Huawei state', () => {
    const wrapper = mount(ArticleCard, {
      props: Huawei.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.exists()).toBe(true);
    expect(props.title).toBe('huawei');
    expect(props.label).toBe('huawei');
    expect(props.size).toBe('mobile');
    expect(props.category).toBe('Politik');
    expect(props.time).toBe('1d');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
    expect(props.id).toBe('Huawei');
    expect(props.alt).toBe('article card')
    expect(props.aria).toBe('article card')
  });
  it('renders with Samsung state', () => {
    const wrapper = mount(ArticleCard, {
      props: Samsung.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.exists()).toBe(true);
    expect(props.title).toBe('samsung');
    expect(props.label).toBe('samsung');
    expect(props.size).toBe('mobile');
    expect(props.category).toBe('Politik');
    expect(props.time).toBe('1d');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
    expect(props.id).toBe('samsung');
    expect(props.alt).toBe('article card')
    expect(props.aria).toBe('article card')
  });
  it('renders with Oppo state', () => {
    const wrapper = mount(ArticleCard, {
      props: Oppo.args,
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.exists()).toBe(true);
    expect(props.title).toBe('oppo');
    expect(props.label).toBe('oppo');
    expect(props.size).toBe('mobile');
    expect(props.category).toBe('Politik');
    expect(props.time).toBe('1d');
    expect(props.src).toBe('https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg');
    expect(props.id).toBe('oppo');
    expect(props.alt).toBe('article card')
    expect(props.aria).toBe('article card')
  });
});