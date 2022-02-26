<script setup lang="ts">
import AppLink from '../components/AppLink.vue';
import BaseButton from '../components/base/BaseButton.vue';
import { isAuth } from '../composable/useAuth';
import { useStore } from 'vuex';

const store = useStore();

function logOut() {
  store.dispatch('user/logOut');
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light container-fluid" role="navigation">
      <AppLink name="articles" class="nav-link">Recent Articles</AppLink>
      <AppLink v-if="isAuth" name="article-post" class="nav-link">Create Article</AppLink>
      <AppLink v-if="isAuth" name="articles-admin" class="nav-link">My Articles</AppLink>
      <AppLink v-if="!isAuth" name="login" class="nav-link">Login</AppLink>
      <BaseButton v-if="isAuth" @click="logOut()"> Log-out</BaseButton>
    </nav>
  </header>
</template>
