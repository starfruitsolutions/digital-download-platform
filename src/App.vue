<template>
  <v-app>
    <v-app-bar
      v-if="this.$route.name != 'release'"
      app
      color="deep-purple accent-4"
      dark
      class="px-5"
    >
      <router-link to="/" tag="div" class="d-flex align-center">
        <v-icon x-large>fas fa-tape</v-icon>
        <h1 class="ml-2">
          TapeShare
        </h1>
      </router-link>

      <v-spacer></v-spacer>
      <v-btn
        v-if="auth"
        :to="{path: '/login'}"
        text
      >
            Login
      </v-btn>
      <v-btn
        v-else
        :to="{path: '/settings'}"
        text
      >
        <v-icon class="mx-3">fa-user-circle</v-icon> {{ userProfile.displayName }}
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { auth } from '@/store/db'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  mounted(){
    if(auth.currentUser) {
      this.bindUserProfile()
    }
  },
  computed: {
    ...mapGetters({
      userProfile: 'userProfile'
    }),
    auth() { return !auth.currentUser }
  },
  methods: {
    ...mapActions({
      bindUserProfile: 'bindUserProfile'
    })
  }
};
</script>
