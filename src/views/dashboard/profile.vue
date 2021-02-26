<template>
  <div>
    <h2 class="mb-5">Profile</h2>

    <v-form
      ref="password"
      v-model="valid"
      @submit.prevent="submit"
    >
      <v-text-field
        v-model="userProfile.name"
        :rules="[validationRules.required]"
        label="Name"
        autocomplete="display name"
        prepend-icon="fa-user"
      />
      <v-text-field
        v-model="userProfile.displayName"
        :rules="[validationRules.required]"
        label="Display Name"
        autocomplete="display name"
        prepend-icon="fa-user-tag"
      />
      <v-textarea
        label="Bio"
        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        prepend-icon="fa-address-card"
        hint="Tell your buyers about yourself"
      />
      <v-btn
        :disabled="!valid"
        type="submit"
        class="mt-3 mb-6"
      >
        Submit
      </v-btn>
    </v-form>


    <v-divider class="my-10"/>
    <h2 class="mb-5">Update Email</h2>


    <v-form
      ref="email"
      v-model="valid"
      @submit.prevent="submit"
    >
      <v-text-field
        v-model="userProfile.email"
        :rules="[validationRules.email]"
        label="Email"
        autocomplete="username"
        prepend-icon="fa-envelope"
      />
      <v-btn
        :disabled="!valid"
        type="submit"
        class="mt-3 mb-6"
      >
        Submit
      </v-btn>
    </v-form>

    <v-divider class="my-10"/>
    <h2 class="mb-5">Update Password</h2>

    <v-form
      ref="password"
      v-model="valid"
      @submit.prevent="submit"
    >
      <v-text-field
        type='password'
        :rules="[validationRules.required]"
        label="Current Password"
        prepend-icon="fa-unlock-alt"
      />
      <v-text-field
        type='password'
        :rules="[validationRules.required]"
        label="New Password"
        prepend-icon="fa-unlock-alt"
      />
    <v-btn
      :disabled="!valid"
      type="submit"
      class="mt-3 mb-6"
    >
      Submit
    </v-btn>
  </v-form>

  <v-divider class="my-10"/>

  </div>
</template>

<script>
// import vuex mapping
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      valid: false
    }
  },
  computed:{
    ...mapGetters({
      userProfile: 'userProfile'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
