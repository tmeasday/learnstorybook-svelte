<script>
  import PureTaskList from './PureTaskList.svelte';
  import { store } from '../store'; // imports the store objeect
  function onPinTask(event) {
    store.archiveTask(event.detail.id); // triggers the "action" in the store
  }
  function onArchiveTask(event) {
    store.pinTask(event.detail.id); // triggers the "action" in the store
  }
</script>

<div>
  <PureTaskList tasks={$store} on:onPinTask={onPinTask} on:onArchiveTask={onArchiveTask} />
</div>
