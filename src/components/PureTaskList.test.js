import PureTaskList from './PureTaskList.svelte';
import { render } from '@testing-library/svelte';
import { withPinnedTasks } from './PureTaskList.stories';
describe('PureTaskList', () => {
  it('renders pinned tasks at the start of the list', () => {
    const { container } = render(PureTaskList, {
      props: {
        tasks: withPinnedTasks,
      },
    });
    expect(container.firstChild.children[0].classList.contains('TASK_PINNED')).toBe(true);
  });
});
