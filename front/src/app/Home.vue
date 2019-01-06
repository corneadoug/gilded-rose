<template>
  <div id="home">
    <h1>Welcome, choose where to go</h1>

    <router-link class="routerLink" to="/shop">Shop</router-link>
    <router-link class="routerLink" to="/innkeeper">Admin</router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {}
}
</script>

<style scoped>

.routerLink {
  margin: 10px;
}

</style>
