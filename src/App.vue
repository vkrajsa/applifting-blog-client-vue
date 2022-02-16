<template>
  <div id="main">
    <AppNavigation />
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
export default {
  components: { AppNavigation },
};
</script>

<style lang="scss"></style>
