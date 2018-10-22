<template>
  <li class="task">
    <h4 class="task-title">{{task.title}}, {{task.companyName}}</h4>
    <footer>
      <p class="task-dates">{{task.dates}}</p>
    </footer>
  </li>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object
  }
};
</script>

<style lang="scss" scoped>
.task {
  background: white;
  padding: 1rem;
  border-radius: 5px;
  min-height: 5rem;
  margin-bottom: 1rem;
}
</style>

