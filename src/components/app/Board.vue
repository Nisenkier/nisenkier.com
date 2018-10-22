<template>
  <div class="boards">
  <h1>Board</h1>
  <pre>{{boards}}</pre>
  </div>
</template>

<script>
export default {
  name: "Board",
  data() {
    return {
      boards: []
    };
  },
  mounted() {
    this.getBoards();
  },
  methods: {
    getBoards() {
      return fetch("http://localhost:3001/boards")
        .catch(e => console.error(e))
        .then(data => data.json())
        .then(boards => this.boards = boards);
    }
  }
};
</script>

