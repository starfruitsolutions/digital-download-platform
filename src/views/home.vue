<template>
  <div>
    home
    {{ todos }}
  </div>
</template>

<script>
// import vuex mapping
import { mapGetters, mapActions } from 'vuex'

export default {
  mounted () {
    this.bindTodos()
  },
  computed: {
    ...mapGetters({
      todos: 'todos'
    })
  },
  methods: {
    ...mapActions({
      bindTodos: 'bindTodos'
    })
  },
}
</script>

<style lang="scss" scoped>

</style>
