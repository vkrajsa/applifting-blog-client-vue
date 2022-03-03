<script>
import BaseNotification from '@/components/base/BaseNotification.vue';
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('notifications', ['notifications']),
  },

  methods: mapActions('notifications', ['remove']),

  components: {
    BaseNotification,
  },
};
</script>

<template>
  <TransitionGroup name="notification" tag="ul" class="notification-wrapper row justify-content-center">
    <li v-for="notification in notifications" :key="notification.id" class="col-8">
      <BaseNotification :notification="notification" />
    </li>
  </TransitionGroup>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
}

.notification {
  &-wrapper {
    width: 100%;
    height: 50px;
    margin: 0 auto;
  }

  &-move,
  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-leave-active {
    position: absolute;
  }
}
</style>
