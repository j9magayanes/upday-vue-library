// SimpleList.spec.js
import { mount } from '@vue/test-utils';
import SimpleList from '../../src/components/SimpleList/SimpleList.vue';
import { Web, Huawei, Samsung, Oppo } from '../../src/components/SimpleList/SimpleList.stories.js'; 

describe('YourComponent', () => {
  it('renders with Web state', () => {
    const wrapper = mount(SimpleList, {
      props: Web.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.items).toBe('[{"name": "Item 1", "href": "https://example.com/item1"}, {"name": "Item 2", "href": "https://example.com/item2"}]');
  });

  it('renders with Huawei state', () => {
    const wrapper = mount(SimpleList, {
      props: Huawei.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.items).toBe('[{"name": "Item 1", "href": "https://example.com/item1"}, {"name": "Item 2", "href": "https://example.com/item2"}]');
  });
  it('renders with Samsung state', () => {
    const wrapper = mount(SimpleList, {
      props: Samsung.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.items).toBe('[{"name": "Item 1", "href": "https://example.com/item1"}, {"name": "Item 2", "href": "https://example.com/item2"}]');
  });
  it('renders with Oppo state', () => {
    const wrapper = mount(SimpleList, {
      props: Oppo.args,
    });
    expect(wrapper.exists()).toBe(true);
    expect(props.items).toBe('[{"name": "Item 1", "href": "https://example.com/item1"}, {"name": "Item 2", "href": "https://example.com/item2"}]');
  });
});