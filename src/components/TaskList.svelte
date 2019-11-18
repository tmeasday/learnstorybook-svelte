<script>
  import Task from './Task.svelte';
  export let loading = false;
  export let tasks = [];

  // reactive declarations (computed prop in other frameworks)
  $: noTasks = tasks.length === 0;
  $: emptyTasks = tasks.length === 0 && !loading;
</script>

{#if loading}
  <div class="list-items">loading</div>
{/if}

{#if emptyTasks}
  <div class="list-items">empty</div>
{/if}

{#each tasks as task}
  <Task {task} on:onPinTask on:onArchiveTask />
{/each}
