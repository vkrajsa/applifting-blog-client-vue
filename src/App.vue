<template>
  <header class="header">
    <nav class="inner" role="navigation">
      <router-link to="/articles" class="nav-link">Articles</router-link>
      <router-link to="/login" class="nav-link">Login</router-link>
    </nav>
  </header>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss"></style>
