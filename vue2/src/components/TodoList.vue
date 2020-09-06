<template>
  <div>
    <input type="text" v-model="input" placeholder="Add TodoItem" />
    <input type="submit" @click="addTodoItem()" />
    <br>
    <span>Total {{ count }} items</span>
    <br>
    <ul>
      <li v-for="(item, index) in $store.state.todoList" :key="item">
        {{ item }}
        <button @click="deleteTodoItem(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      input: ""
    };
  },
  methods: {
    addTodoItem() {
      if (this.input) {
        this.$store.commit("addTodoItem", this.input); // TODO: wrap this logic to vuex store code
        this.input = "";
      }
    },

    deleteTodoItem(index: number) {
      this.$store.commit("deleteTodoItem", index);
    }
  },
  computed: {
    count(): number {
      return this.$store.state.todoList.length;
    }
  }
});
</script>