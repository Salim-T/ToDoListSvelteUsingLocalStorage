<script>
  import Task from './lib/Task.svelte'
  import List from './lib/List.svelte'
  import Router from 'svelte-spa-router'

</script>

<Router routes={{  
    '/': List,
    '/list/:id': Task }} 
  />

