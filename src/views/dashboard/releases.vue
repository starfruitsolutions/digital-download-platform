<template>
  <div>
    <Modal
      :visible="dialog"
      :ok-visible="true"
      :cancel-visible="true"
      ok-text="Save"
      title="Create"
      @ok="save"
      @cancel="close"
    >
      <v-text-field
        v-model="editedItem.imageURL"
        label="Image"
      />
      <v-text-field
        v-model="editedItem.fileURL"
        label="File"
      />
      <v-text-field
        v-model="editedItem.title"
        label="Title"
      />
      <v-textarea
        v-model="editedItem.description"
        label="Description"
      />
      <v-text-field
        v-model="editedItem.price"
        label="Price"
      />

    </Modal>
      <v-row>
        <v-col class="col-2">
          <v-btn
            dark
            x-large
            width="100%"
            @click="dialog=true"
          >
            <v-icon class="mr-2">fa-plus</v-icon> Add Release
          </v-btn>
        </v-col>
      </v-row>

      <v-row v-for="release in releases" :key="release.id">
        <v-col>
          <v-divider class="my-5"/>
          <v-row>
            <v-col class="col-2">
              <v-img
                :src="release.imageURL"
              />
            </v-col>
            <v-col class="mx-2">
              <h2>{{release.title}}</h2>
              <p class="subtitle-1">${{release.price}}</p>
              <v-row>
                <v-col>
                  <p>{{release.description}}</p>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="col-3">
              <v-btn
                class="mb-3"
                color="deep-purple"
                dark
                x-large
                width="100%"
                @click="editItem(release)"
              >
                Edit
              </v-btn>
              <v-btn
                color="red"
                dark
                x-large
                width="100%"
                @click="deleteItem(release.id)"
              >
                Delete
              </v-btn>
              <v-divider class="my-5"></v-divider>
              <div class="d-flex justify-space-around">
                  <v-btn :to="`/release/${userID}/${release.id}`">
                    <v-icon small class="mr-2">fas fa-link</v-icon> Link
                  </v-btn>
                  <v-btn>
                    <v-icon small class="mr-2">fab fa-facebook-f</v-icon> Share
                  </v-btn>
                  <v-btn>
                    <v-icon small class="mr-2">fab fa-twitter</v-icon> Tweet
                  </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  </div>
</template>

<script>
// import vuex mapping
import { mapActions, mapGetters } from 'vuex'
import { auth } from '@/store/db'

export default {
  data () {
     return {
       dialog: false,
       editedItem: {}
     }
   },
  mounted (){
    this.bindReleases()
  },
  computed:{
    ...mapGetters({
      releases: 'releases'
    }),
    userID(){
      return auth.currentUser.uid
    }
  },
  methods: {
    ...mapActions({
      bindReleases: 'bindReleases',
      addRelease: 'addRelease',
      updateRelease: 'updateRelease',
      deleteRelease: 'deleteRelease'
    }),
    editItem (release) {
      this.editedItem = release
      this.dialog = true
    },
    deleteItem (item) {
      let confirmation = confirm('Are you sure you want to delete this parking area?')
      if (confirmation) {
        this.deleteRelease(item)
      }
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
      }, 300)
    },
    save () {
      if (!this.editedItem.id) { // if it doesn't have an id it's new
        this.addRelease(this.editedItem)
      } else {
        this.updateRelease(this.editedItem)
      }
      this.close()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
