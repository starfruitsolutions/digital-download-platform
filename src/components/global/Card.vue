<template>
  <v-card
    :class="{ 'mb-5': margins}"
    color="white"
    class="card elevation-3"
  >
    <v-toolbar
      :class="{'clickable': expandable}"
      color="blue darken-3"
      dark
      @click="toggle()">
      <v-toolbar-side-icon v-if="expandable">
        <v-icon v-if="!expanded">fa-plus-square</v-icon>
        <v-icon v-if="expanded">fa-minus-square</v-icon>
      </v-toolbar-side-icon>
      <h2 class="pa-10">
        <slot name = "header"/>
      </h2>
      <v-spacer/>
      <div class="header-extras">
        <slot name = "extras"/>
      </div>
    </v-toolbar>
    <div
      v-if="!expandable || expanded"
      :class="{ 'pa-10': padding}"
    >
      <slot/>
    </div>
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
