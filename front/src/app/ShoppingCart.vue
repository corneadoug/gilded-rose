<template>
  <div>
    <h1>Shopping Cart</h1>

    <!-- Shopping Cart Icon -->
    <div class="homeBtn">
      <v-btn fab dark small color="teal">
        <v-icon @click="$router.push('/shop')" dark>store</v-icon>
      </v-btn>
    </div>

    <div class="cartLine" v-for="item in computedCart" :key="item.details.id">
      {{item.details.name}} - {{item.details.quality}}$ x {{item.nbInCart}}
    </div>

    <span class="total">Total = {{ total }}$</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// Components imports
import ItemsView from "@/components/ItemsView.vue";

export default {
  name: "ShoppingCart",
  components: {},
  computed: {
    ...mapGetters(["computedCart"]),
    total: function() {
      return this.computedCart.reduce((acc, val) => {
        return acc + (val.details.quality * val.nbInCart);
      }, 0);
    }
  },
  methods: {
    ...mapActions(["addItemToCart"])
  }
};
</script>

<style scoped>

h1 {
  margin-bottom: 20px;
}

.total {
  margin-top: 20px;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
}

.homeBtn {
  position: absolute;
  top: 0px;
  right: 10px;
}

.cartLine {
  background: white;
  border: 1px solid #EEEEEE;
  width: 400px;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
}
</style>