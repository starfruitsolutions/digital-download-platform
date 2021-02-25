<template>
  <v-dialog
    v-model="visible"
    width="600"
    @input="cancel"
  >
    <v-card>
      <v-card-title
        class="px-10 white--text deep-purple accent-3"
      >
        {{ title }}
      </v-card-title>

      <v-card-text class="pa-10">
        <slot/>
      </v-card-text>

      <v-card-actions class="px-10 pb-10">
        <v-spacer/>
        <v-btn
          v-if="okVisible"
          color="deep-purple"
          dark
          large
          @click="ok"
        >
          {{ okText }}
        </v-btn>
        <v-btn
          v-if="cancelVisible"
          large
          color="white"
          @click="cancel"
        >
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    },
    okText: {
      type: String,
      default: 'Ok'
    },
    okVisible: {
      type: Boolean,
      default: true
    },
    cancelVisible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return ['modal', 'animated', 'is-active']
    }
  },
  methods: {
    ok () {
      this.$emit('ok')
    },
    cancel () {
      this.$emit('cancel')
    }
  }
}
</script>
