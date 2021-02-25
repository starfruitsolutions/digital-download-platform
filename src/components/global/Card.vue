<template>
  <v-card
    :class="{ 'mb-5': margins}"
    color="white"
    class="card elevation-3"
  >
    <v-toolbar
       class="px-6"
      :class="{'clickable': expandable}"
      color="deep-purple accent-3"
      dark
      height="100"
      @click="toggle()">
      <v-toolbar-side-icon v-if="expandable">
        <v-icon v-if="!expanded">fa-plus-square</v-icon>
        <v-icon v-if="expanded">fa-minus-square</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <h3>
          <slot name = "header"/>
        </h3>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <slot name = "extras"/>
    </v-toolbar>
    <p
      v-if="!expandable || expanded"
      :class="{ 'pa-10': padding}"
    >
      <slot/>
    </p>
  </v-card>
</template>

<script>
export default {
  props: {
    expandable: {
      type: Boolean,
      default: false
    },
    padding: {
      type: Boolean,
      default: true
    },
    margins: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      expanded: false
    }
  },
  methods: {
    toggle () {
      this.expanded = !this.expanded
    }
  }
}
</script>
