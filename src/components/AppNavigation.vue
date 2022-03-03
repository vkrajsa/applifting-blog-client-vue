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
  <header
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-2 border-bottom"
  >
    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark"> Vojtěch Krajsa </a>
    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" role="navigation">
      <li><AppLink name="articles" class="nav-link link-dark">Recent Articles</AppLink></li>
      <li><AppLink v-if="isAuth" name="article-post" class="nav-link link-dark">Create Article</AppLink></li>
      <li><AppLink v-if="isAuth" name="articles-admin" class="nav-link link-dark">My Articles</AppLink></li>
    </ul>
    <div class="col-md-3 text-end">
      <AppLink v-if="!isAuth" name="login" class="btn btn-primary">Login</AppLink>
      <BaseButton v-if="isAuth" customClass="btn-primary" @click="logOut()">Log-out</BaseButton>
    </div>
  </header>
</template>
