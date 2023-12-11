// FooterList.spec.js
import { mount } from '@vue/test-utils';
import FooterList from '../../src/components/FooterList/FooterList.vue';
import { Web, Huawei, Samsung, Oppo } from '../../src/components/FooterList/FooterList.stories.js'; 

describe('FooterList', () => {
  it('renders with Web state', () => {
    const wrapper = mount(FooterList, {
      props: Web.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.items).toBe('[{"name": "Privacy Policy", "href": "http://localhost:3000/privacy_policy#26fc5702-5d0a-4b14-8135-4bc49ff2fa49"}, {"name": "Privacy Settings", "callback": ""}, {"name": "Imprint", "href": "http://localhost:3000/imprint"}]');
    expect(props.id).toBe('web');
    expect(props.alt).toBe('footer')
    expect(props.aria).toBe('footer')
  });

  it('renders with Huawei state', () => {
    const wrapper = mount(FooterList, {
      props: Huawei.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.items).toBe('[{"name": "Privacy Policy", "href": "http://localhost:3000/privacy_policy#26fc5702-5d0a-4b14-8135-4bc49ff2fa49"}, {"name": "Privacy Settings", "callback": ""}, {"name": "Imprint", "href": "http://localhost:3000/imprint"}]');
    expect(props.id).toBe('huawei');
    expect(props.alt).toBe('footer')
    expect(props.aria).toBe('footer')
  });
  it('renders with Samsung state', () => {
    const wrapper = mount(FooterList, {
      props: Samsung.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.items).toBe('[{"name": "Privacy Policy", "href": "http://localhost:3000/privacy_policy#26fc5702-5d0a-4b14-8135-4bc49ff2fa49"}, {"name": "Privacy Settings", "callback": ""}, {"name": "Imprint", "href": "http://localhost:3000/imprint"}]');
    expect(props.id).toBe('samsung');
    expect(props.alt).toBe('footer')
    expect(props.aria).toBe('footer')
  });
  it('renders with Oppo state', () => {
    const wrapper = mount(FooterList, {
      props: Oppo.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.items).toBe('[{"name": "Privacy Policy", "href": "http://localhost:3000/privacy_policy#26fc5702-5d0a-4b14-8135-4bc49ff2fa49"}, {"name": "Privacy Settings", "callback": ""}, {"name": "Imprint", "href": "http://localhost:3000/imprint"}]');
    expect(props.id).toBe('oppo');
    expect(props.alt).toBe('footer')
    expect(props.aria).toBe('footer')
  });

});