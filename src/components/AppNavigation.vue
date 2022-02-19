<script>
import { isAuthenticated } from '@/store/helpers';
export default {
  created() {},
  methods: {
    logOut() {
      this.$store.dispatch('auth/logOut');
    },
  },
  // i have access to getters defined in isAuthenticated
  computed: {
    ...isAuthenticated,
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light container-fluid" role="navigation">
      <router-link to="/articles" class="nav-link">Recent Articles</router-link>
      <router-link v-if="isLoggedIn" to="/my-articles" class="nav-link">My Articles</router-link>
      <router-link v-if="isLoggedIn" to="/add-article" class="nav-link">Create Article</router-link>
      <router-link v-if="!isLoggedIn" to="/login" class="nav-link ms-auto">Login</router-link>
      <button v-else class="btn btn-primary" @click="logOut()">Log-out</button>
    </nav>
  </header>
</template>
