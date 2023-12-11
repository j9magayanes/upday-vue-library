// NewsSource.spec.js
import { mount } from '@vue/test-utils';
import NewsSource from '../../src/components/NewsSource/NewsSource.vue';
import { Web, Huawei, Samsung, Oppo } from '../../src/components/NewsSource/NewsSource.stories.js'; 

describe('FullText', () => {
  it('renders with Web state', () => {
    const wrapper = mount(NewsSource, {
      props: Web.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.appName).toBe('meinestadt');
    expect(props.label).toBe('test');
    expect(props.id).toBe('web');
    expect(props.alt).toBe('news source')
    expect(props.aria).toBe('news source')
  });

  it('renders with Huawei state', () => {
    const wrapper = mount(NewsSource, {
      props: Huawei.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.appName).toBe('meinestadt');
    expect(props.label).toBe('test');
    expect(props.id).toBe('web');
    expect(props.alt).toBe('news source')
    expect(props.aria).toBe('news source')
  });
  it('renders with Samsung state', () => {
    const wrapper = mount(NewsSource, {
      props: Samsung.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.appName).toBe('meinestadt');
    expect(props.label).toBe('test');
    expect(props.id).toBe('samsung');
    expect(props.alt).toBe('news source')
    expect(props.aria).toBe('news source')
  });
  it('renders with Oppo state', () => {
    const wrapper = mount(NewsSource, {
      props: Oppo.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.appName).toBe('meinestadt');
    expect(props.label).toBe('test');
    expect(props.id).toBe('oppo');
    expect(props.alt).toBe('news source')
    expect(props.aria).toBe('news source')
  });
});