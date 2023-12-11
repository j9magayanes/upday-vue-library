//TitleDescription.spec.js
import { mount } from '@vue/test-utils';
import TitleDescription from '../../src/components/TitleDescription/TitleDescription.vue';
import { Web, Huawei, Samsung, Oppo } from '../../src/components/TitleDescription/TitleDescription.stories.js'; 

describe('YourComponent', () => {
  it('renders with Web state', () => {
    const wrapper = mount(TitleDescription, {
      props: Web.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.label).toBe('Meinestadt');
    expect(props.title).toBe('TN PUSH: A primary school in Chester was put into lockdown after receiving a malicious email. The police launched an investigation into the threats, which were sent to several schools in the north west.');
    expect(props.size).toBe('size');
    expect(props.id).toBe('web');

  });

  it('renders with Huawei state', () => {
    const wrapper = mount(AdComponent, {
      props: Huawei.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.label).toBe('Meinestadt');
    expect(props.title).toBe('TN PUSH: A primary school in Chester was put into lockdown after receiving a malicious email. The police launched an investigation into the threats, which were sent to several schools in the north west.');
    expect(props.size).toBe('size');
    expect(props.id).toBe('huawei');
  });
  it('renders with Samsung state', () => {
    const wrapper = mount(AdComponent, {
      props: Samsung.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.label).toBe('Meinestadt');
    expect(props.title).toBe('TN PUSH: A primary school in Chester was put into lockdown after receiving a malicious email. The police launched an investigation into the threats, which were sent to several schools in the north west.');
    expect(props.size).toBe('size');
    expect(props.id).toBe('samsung');
  });
  it('renders with Oppo state', () => {
    const wrapper = mount(AdComponent, {
      props: Oppo.args,
    });
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.label).toBe('Meinestadt');
    expect(props.title).toBe('TN PUSH: A primary school in Chester was put into lockdown after receiving a malicious email. The police launched an investigation into the threats, which were sent to several schools in the north west.');
    expect(props.size).toBe('size');
    expect(props.id).toBe('oppo');
  });
  // Add more test cases for other states as needed
});