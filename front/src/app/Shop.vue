<template>
  <div>
    <h1>Shop</h1>

    <!-- Shopping Cart Icon -->
    <div class="shoppingCartHeader">
      <v-btn fab dark small color="cyan">
          <v-icon @click="$router.push('/cart')" dark>shopping_cart</v-icon>
      </v-btn>
      <span v-if="nbProductInCart > 0" class="itemsInCart"/>
    </div>

    <items-view :clickable="true" @click="addItemToCart"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// Components imports
import ItemsView from "@/components/ItemsView.vue";

export default {
  name: "Shop",
  components: { ItemsView },
  computed: {
    ...mapGetters(["nbProductInCart"])
  },
  methods: {
    ...mapActions(["addItemToCart"])
  }
};
</script>

<style scoped>
.shoppingCartHeader {
  position: absolute;
  top: 0px;
  right: 10px;
}

.itemsInCart {
  background-color: #FA5366;
  padding: 3px;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  display: inline-block;
  position: absolute;
  top: 16px;
  right: 16px;
}
</style>