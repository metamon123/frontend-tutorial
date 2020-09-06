<template>
  <div class="home">
    <h2>Your Todo List</h2>
    <img alt="Vue logo" src="../assets/logo.png" />
    <TodoList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoList from "@/components/TodoList.vue";

export default Vue.extend({
    components: {
        TodoList
    }
});
</script>