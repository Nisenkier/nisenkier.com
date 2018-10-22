<template>
<div class="main">
  <Board />
</div>
</template>

<script>

import Board from './components/app/Board.vue'

export default {
  name: "App",
  data: () => {
    return {
      mocks: [{ data: "data" }]
    };
  },
  components: {
    Board
  }
};
</script>

