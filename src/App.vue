<template>
  <Navbar />
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
<style>

html,
body {
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
}

</style>
