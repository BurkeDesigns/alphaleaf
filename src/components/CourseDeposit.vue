<template>
  <stripe-checkout
    ref="checkoutRef"
    :pk="publishableKey"
    :items="items"
    :successUrl="successUrl"
    :cancelUrl="cancelUrl"
  >
    <template slot="checkout-button">
      <button @click="checkout" el="btn">Course Deposit</button>
    </template>
  </stripe-checkout>
</template>
 
<script>
import { StripeCheckout } from 'vue-stripe-checkout';
export default {
  name: 'CourseDeposit',
  components: {
    StripeCheckout
  },
  data: () => ({
    loading: false,
    publishableKey: 'pk_live_YUvk0GoNh6Am27XvASuBXrWe00GRgAzRKx',//process.env.PUBLISHABLE_KEY,
    items: [{sku: 'sku_H4L4Z3AY8cq8EC', quantity: 1}],
    successUrl: 'https://alphaleaf.tech',
    cancelUrl: 'https://alphaleaf.tech/payments/deposit',
  }),
  methods: {
    checkout () {
      this.$refs.checkoutRef.redirectToCheckout();
    }
  }
}
</script> 