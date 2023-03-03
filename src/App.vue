<template>
  <Navbar />
  <Login />


  <router-view />
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Login from '@/views/Login.vue';

export default {
  components: {
    Navbar,
    Login
  }
}

</script>
<style></style>
