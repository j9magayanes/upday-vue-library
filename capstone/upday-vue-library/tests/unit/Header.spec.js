// Header.spec.js
import { mount } from '@vue/test-utils';
import Header from '../../src/components/Header/Header.vue';
import { LoggedIn, LoggedOut } from '../../src/components/Header/Header.stories.js'; 

describe('Header', () => {
  it('renders with LoggedIn state', () => {
    const wrapper = mount(Header, {
      props: LoggedIn.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.user).toBe( {
      name: 'Jane Doe',
    });
  });

  it('renders with Loggedout state', () => {
    const wrapper = mount(Header, {
      props: LoggedOut.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.user).toBe( {
      user: null,
    }
  });
});