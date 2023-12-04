import { mount } from '@testing-library/vue';
import AdComponent from './AdComponent.stories';

test('renders story', async () => {
  const { getByText } = mount(AdComponent);
  expect(getByText('Your story title')).toBeInTheDocument();
});
