<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="600"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      :src="release.imageURL"
    ></v-img>

    <v-card-text class="pa-7">
      <v-row>
        <v-col>
          <h1>{{release.title}}</h1>
          <p class="my-2 subtitle-1">
            <v-icon small class="mr-2">fas fa-tape</v-icon>{{ release.author }}
          </p>

          <v-spacer class="my-5"></v-spacer>

          <div>{{ release.description }}</div>

          <v-spacer class="my-8"></v-spacer>

          <v-icon small class="mr-2">fas fa-music</v-icon> You will get an MP3 file.
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
            <div class="mb-3 d-flex justify-center">
              <h2> ${{ release.price }} </h2>
            </div>
            <v-btn
              color="deep-purple"
              dark
              x-large
              width="100%"
              @click="buy"
            >
              Buy Now
            </v-btn>

            <v-divider class="my-5"></v-divider>
            <div class="d-flex justify-space-between">
                <v-btn small>
                  <v-icon small class="mr-2">fas fa-link</v-icon> Link
                </v-btn>
                <v-btn small>
                  <v-icon small class="mr-2">fab fa-facebook-f</v-icon> Share
                </v-btn>
                <v-btn small>
                  <v-icon small class="mr-2">fab fa-twitter</v-icon> Tweet
                </v-btn>
            </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
// import vuex mapping
import { mapActions, mapGetters } from 'vuex'

export default {
  mounted (){
    this.fetchRelease({
      userID: this.$route.params.userID,
      releaseID: this.$route.params.releaseID
    })
  },
  computed:{
    ...mapGetters({
      release: 'release'
    })
  },
  methods: {
    ...mapActions({
      fetchRelease: 'fetchRelease'
    }),
  }
}
</script>

<style lang="scss" scoped>

</style>
