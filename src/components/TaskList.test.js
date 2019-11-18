import TaskList from './TaskList.svelte';
import { render } from '@testing-library/svelte';
import { withPinnedTasks } from './TaskList.stories';
describe('TaskList', () => {
  it('renders pinned tasks at the start of the list', () => {
    const { container } = render(TaskList, {
      props: {
        tasks: withPinnedTasks,
      },
    });
    expect(container.firstChild.children[0].classList.contains('TASK_PINNED')).toBe(true);
  });
});
