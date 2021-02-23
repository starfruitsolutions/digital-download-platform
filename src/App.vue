<template>
  <v-app>
    <v-app-bar
      v-if="this.$route.name != 'release'"
      app
      color="primary"
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
        :to="{path: '/login'}"
        flat
      >
            Login
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
