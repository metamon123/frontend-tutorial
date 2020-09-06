<template>
  <div>
    <input type="text" v-model="input" placeholder="Add TodoItem" />
    <input type="submit" @click="addTodoItem()" />
    <br>
    <span>Total {{ count }} items</span>
    <br>
    <ul>
      <li v-for="(item, index) in todoList" :key="item">
        {{ item }}
        <button @click="deleteTodoItem(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            input: "",
            todoList: [],
        }
    },
    methods: {
        addTodoItem() {
            if (this.input) {
                this.todoList.push(this.input);
                this.input = "";
            }
        },

        deleteTodoItem(index: number) {
            this.todoList.splice(index, 1);
        }
    },
    computed: {
        count(): number {
            return this.todoList.length;
        }
    }
});
</script>