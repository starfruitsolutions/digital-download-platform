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
      src="https://linkstorage.linkfire.com/medialinks/images/4b41d5f1-b8d0-4bcc-895e-f5226b9c6c30/artwork-440x440.jpg"
    ></v-img>

    <v-card-text class="pa-7">
      <v-row>
        <v-col>
          <h1>Cajun Things</h1>
          <p class="my-2 subtitle-1">
            <v-icon small class="mr-2">fas fa-tape</v-icon>WiteNoize
          </p>

          <v-spacer class="my-5"></v-spacer>

          <div>
                Billboard TOP 50 Music Producer<br>
                @WteNoize<br>
                WiteNoize.com<br>
                A Dying Breed Survived & A Dynasty Submerged.<br>
                #WiteNoize
          </div>

          <v-spacer class="my-8"></v-spacer>

          <v-icon small class="mr-2">fas fa-music</v-icon> You will get an MP3 file.
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
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
export default {
  data () {
    return {
      valid: false,
      form: {
        email: null,
        password: null
      }
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
