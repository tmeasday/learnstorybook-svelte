<script>
  import PureTaskList from './PureTaskList.svelte';
  import { taskStore } from '../store'; // imports the store objeect
  function onPinTask(event) {
    taskStore.archiveTask(event.detail.id); // triggers the "action" in the store
  }
  function onArchiveTask(event) {
    taskStore.pinTask(event.detail.id); // triggers the "action" in the store
  }
</script>

<div>
  <PureTaskList tasks={$taskStore} on:onPinTask={onPinTask} on:onArchiveTask={onArchiveTask} />
</div>
