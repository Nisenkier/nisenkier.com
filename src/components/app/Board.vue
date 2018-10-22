<template>
  <div class="board">
    <header>
      <h3 class="board-headline">
        <span class="board-name">{{board.name}}</span>
        <span class="tasks-count">{{board.tasks.length}}</span>
        </h3>
    </header>
    <main>
      <ul class="board-tasks">
        <Task v-for="(task, index) in board.tasks" :task="task" :key="index" />
      </ul>
    </main>
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  name: "Board",
  props: {
    board: Object
  },
  components: {
    Task
  }
};
</script>

<style lang="scss" scoped>
.board {
  flex: 1;
  border-left: .25rem solid lightgrey;

  &:first-of-type {
    border-left: 0;
  }

  &-headline {
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 3rem;
    padding: 0 1rem;
  }

  &-tasks {
    padding: 0 1rem;
  }
}
</style>
