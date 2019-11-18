import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';

import Task from './Task.svelte';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'Task_INBOX',
  updated_at: new Date(2019, 0, 1, 9, 0),
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('Task', module)
  .add('default', () => {
    return {
      Component: Task,
      props: {
        task,
      },
      on: {
        ...actions,
      },
    };
  })
  .add('pinned', () => {
    return {
      Component: Task,
      props: {
        task: {
          ...task,
          state: 'TASK_PINNED',
        },
      },
      on: {
        ...actions,
      },
    };
  })
  .add('archived', () => {
    return {
      Component: Task,
      props: {
        task: {
          ...task,
          state: 'TASK_ARCHIVED',
        },
      },
      on: {
        ...actions,
      },
    };
  });
