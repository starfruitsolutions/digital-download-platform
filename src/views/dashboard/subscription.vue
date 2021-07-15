<template>
  <div>
    <v-row>
      <v-col
        v-for="subscription in subscriptions"
        :key="subscription.id"
      >
        <v-card class="mx-auto mb-1">

          <v-card-title>{{ subscription.name }}</v-card-title>

          <v-divider class="mx-4"></v-divider>

          <v-card-text>

            <div class="subtitle-1">
              {{ subscription.description }}
            </div>
             <h3 class="my-4">
               {{ subscription.pricing }}
             </h3>

           </v-card-text>

           <v-divider class="mx-4"></v-divider>

           <v-card-actions>
             <v-btn
              color="deep-purple lighten-2"
              text
              @click="reserve"
            >
              Select
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        * payment processor fees not included
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        credit card stuff
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      subscriptions: [
        {
          name: 'Basic',
          description: 'description of subscription',
          pricing: '$5/month + 10%*',
          id: 1
        },
        {
          name: 'Premium',
          description: 'description of subscription',
          pricing: '$20/month + 5%*',
          id: 2
        },
        {
          name: 'Professional',
          description: 'description of subscription',
          pricing: '$30/month*',
          id: 3
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
