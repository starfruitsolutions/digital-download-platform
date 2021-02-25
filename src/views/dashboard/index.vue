<template>
    <v-row>
      <v-navigation-drawer
        class="mt-15"
        color="deep-purple accent-3"
        dark
        permanent
        fixed
        clipped
        height="calc(100vh - 60px)"
        width="calc(100% / 12 * 2)"
      >
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.path"
            :active="$route.path == item.path"
            class="px-10"
            link
          >
            <v-list-item-icon width>
              <v-icon class="fa-fw">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block>
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <div class="content-area">
        <v-container class="pa-15">
          <router-view></router-view>
        </v-container>
      </div>
    </v-row>
</template>

<script>
export default {
  data () {
     return {
       items: [
         { title: 'Releases', path: '/dashboard/releases', icon: 'fa-tape' },
         { title: 'Profile', path: '/dashboard/profile', icon: 'fa-user' },
         { title: 'Payments', path: '/dashboard/payments', icon: 'fa-credit-card' },
         { title: 'Subscription', path: '/dashboard/subscription', icon: 'fa-file-invoice-dollar' },
         { title: 'Settings', path: '/dashboard/settings', icon: 'fa-cog' },
       ],
     }
   },
}
</script>

<style lang="scss" scoped>
  .content-area{
    width: calc(100% / 12 * 10);
    margin-left: calc(100% / 12 * 2);
  }
</style>
