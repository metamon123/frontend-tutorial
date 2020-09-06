import Vue from "vue";
import Vuex from "vuex";
import { TodoState } from '@/store/TodoState';

Vue.use(Vuex);

export default new Vuex.Store({
  state: <TodoState>{
    todoList: []
  },
  mutations: {
    addTodoItem(state: TodoState, item: string) {
      state.todoList.push(item);
    },
    deleteTodoItem(state: TodoState, index: number) {
      state.todoList.splice(index, 1);
    }
  },
  actions: {},
  modules: {}
});
