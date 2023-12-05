import { render, screen } from '@testing-library/vue';
import { composeStories } from '@storybook/testing-vue';
import * as stories from './AdComponent.stories'; // import all stories from the stories file

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const { Web} = composeStories(stories);

test('renders primary button with default args', () => {
  render(Web());
  const buttonElement = screen.getByText(
    "Story"
  );
  expect(buttonElement).not.toBeNull();
});
