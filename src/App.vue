<script>
import AppNavigation from '@/components/AppNavigation';
import AppNotifications from '@/components/AppNotifications';

export default {
  components: { AppNavigation, AppNotifications },
};
</script>

<template>
  <div id="main" class="container pb-5">
    <AppNavigation />
    <AppNotifications />
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<style lang="scss">
.action-icon {
  cursor: pointer;
}
</style>
