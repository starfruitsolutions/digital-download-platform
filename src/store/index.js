// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from './db'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    todos: (state)=> {
      return state.todos
    }
  },
  mutations: {
    ...vuexfireMutations
  },
  actions: {
    bindTodos: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef('todos', db.collection('todos'))
    }),
    addTodo: firestoreAction((context, payload) => {
            return db.collection('todos').add(payload)
    }),
  },
})
