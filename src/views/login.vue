<template>
  <v-container
    fluid
    fill-height>
    <v-layout
      align-center
      justify-center>
      <v-flex
        xs12
        sm8
        lg4>
        <Card>
          <template slot="header">Login</template>
          <v-container>
            <v-form
              ref="form"
              v-model="valid"
              @submit.prevent="submit"
            >
              <v-text-field
                v-model="form.email"
                :rules="[validationRules.email]"
                label="Email"
                autocomplete="username"
                prepend-icon="fa-envelope"
              />
              <v-text-field
                v-model="form.password"
                type='password'
                :rules="[validationRules.required]"
                label="Password"
                autocomplete="current-password"
                prepend-icon="fa-unlock-alt"
              />
              <v-btn
                :disabled="!valid"
                type="submit"
                class="mt-3 mb-6"
              >
                Submit
              </v-btn>
                <v-flex>
                  New to TapeShare?
                  <router-link
                    :to="{ path: '/signup' }"
                    class="pa-3">Sign Up
                  </router-link>
                </v-flex>
                <v-flex>
                  Forget your password?
                  <router-link
                    :to="{ path: '/passwordreset'}"
                    class="pa-3">Reset Password
                  </router-link>
                </v-flex>
            </v-form>
          </v-container>
        </Card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import vuex mapping
import { mapActions } from 'vuex'

// our new component
export default {
  name: 'LoginForm',
  data () {
    return {
      valid: false,
      form: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    ...mapActions({
      login: 'login'
    }),
    submit () {
      this.login(this.form).then(() => this.$router.push(this.$route.query.redirect || '/dashboard'))
    }
  }
}
</script>
