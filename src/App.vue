<template>
<div class="main">
  <ul class="boards-list">
    <Board v-for="(board, index) in boards" :board="board" :key="index" />
  </ul>
</div>
</template>

<script>
import Board from "./components/app/Board.vue";

export default {
  name: "App",
  data() {
    return {
      boards: [],
    };
  },
  created(){
    this.getBoards()
  },
  methods: {
    getBoards() {
      return fetch("http://localhost:3001/boards")
        .catch(e => console.error(e))
        .then(data => data.json())
        .then(boards => this.boards = boards);
    }
  },
  components: {
    Board
  }
};
</script>

<style lang="scss">
@import "~minireset.css/minireset.sass";
body {
  background-color: whitesmoke;
}

</style>

<style lang="scss" scoped>
.main {
  flex: 1;
  width: 100%;
}
.boards-list {
  display: flex;
  height: 100%;
}
</style>

