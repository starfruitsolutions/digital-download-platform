// store.js
import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { auth, db } from './db'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {},
    releases:{},
    release:{},
    todos: [],
  },
  getters: {
    todos: (state)=> {
      return state.todos
    },
    userProfile: (state)=> {
      return state.userProfile
    },
    releases: (state)=> {
      return state.releases
    },
    release: (state)=> {
      return state.release
    }
  },
  mutations: {
    ...vuexfireMutations,
    setRelease(state, val) {
      state.release = val
    }
  },
  actions: {
    login: async ({dispatch}, form) => {
      await auth.signInWithEmailAndPassword(form.email, form.password)
      // fetch user profile
      dispatch('bindUserProfile')
    },

    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await auth.createUserWithEmailAndPassword(form.email, form.password)

      // create user profile object in userCollections
      await db.collection('users').doc(user.uid).set({
        name: form.name,
        displayName: form.displayName,
        email: form.email
      })

      // fetch user profile and set in state
      dispatch('bindUserProfile')
    },

    bindUserProfile: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef('userProfile', db.collection('users').doc(auth.currentUser.uid))
    }),

    bindReleases: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef('releases', db.collection(`users/${auth.currentUser.uid}/releases`))
    }),

    async addRelease(context, form) {
      // create user profile object in userCollections
      await db.collection(`users/${auth.currentUser.uid}/releases`).add(form)
    },

    async updateRelease(context, form) {
      // create user profile object in userCollections
      await db.collection(`users/${auth.currentUser.uid}/releases`).doc(form.id).set(form)
    },

    async deleteRelease(context, payload) {
      console.log(payload)
      // create user profile object in userCollections
      await db.collection(`users/${auth.currentUser.uid}/releases`).doc(payload).delete()
    },

    fetchRelease: async ({commit}, payload) => {
      const release = await  db.collection(`users/${payload.userID}/releases`).doc(payload.releaseID).get()
      commit('setRelease', release.data())
    },


    addTodo: firestoreAction((context, payload) => {
            return db.collection('todos').add(payload)
    }),
  },
})
