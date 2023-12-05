// NewsCategory.spec.js
import { mount } from '@vue/test-utils';
import NewsCategory from '../../src/components/NewsCategory/NewsCategory.vue';
import { Web, Huawei, Samsung, Oppo } from '../../src/components/NewsCategory/NewsCategory.stories.js'; 

describe('YourComponent', () => {
  it('renders with Web state', () => {
    const wrapper = mount(NewsCategory, {
      props: Web.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.appName).toBe('meinestadt');
    expect(props.source).toBe('Meinestadt');
    expect(props.label).toBe('test');
  });

  it('renders with Huawei state', () => {
    const wrapper = mount(NewsCategory, {
      props: Huawei.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.appName).toBe('meinestadt');
    expect(props.source).toBe('Meinestadt');
    expect(props.label).toBe('test');
  });
});