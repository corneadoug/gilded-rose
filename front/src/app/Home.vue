<template>
  <div id="home">
    <h1>Welcome, choose where to go</h1>

    <v-btn color="info" @click="$router.push('/shop')">Shop</v-btn>
    <v-btn color="warning" @click="$router.push('/innkeeper')">Admin</v-btn>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {}
}
</script>

<style scoped>

#home {
  padding-top: 60px;
}

.routerLink {
  margin: 10px;
}

</style>
