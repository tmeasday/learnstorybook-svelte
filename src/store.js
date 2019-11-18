import { writable } from 'svelte/store';
const TaskBox = () => {
  const { subscribe, update } = writable([
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ]);

  return {
    subscribe,
    archiveTask: id =>
      update(tasks => {
        tasks.map(task => (task.id === id ? { ...task, state: 'TASK_ARCHIVED' } : task));
        return tasks;
      }),
    pinTask: id =>
      update(tasks => {
        tasks.map(task => (task.id === id ? { ...task, state: 'TASK_PINNED' } : task));
        return tasks;
      }),
  };
};
export const taskStore = TaskBox();

// store to handle the app state
const appState = () => {
  const { subscribe, update } = writable(false);
  return {
    subscribe,
    error: () => update(error => !error),
  };
};

export const AppStore = appState();
