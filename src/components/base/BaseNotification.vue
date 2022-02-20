<script>
import { mapActions } from 'vuex';

export default {
  props: {
    notification: {
      type: Object,
      default: () => {},
    },
  },

  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 3000);
  },

  beforeUnmount() {
    clearTimeout(this.timeout);
  },

  methods: {
    ...mapActions('notifications', ['remove']),
    // TODO: WHEN I ADD ICONS
    // close() {
    //   this.remove(this.notification);
    // },
  },
};
</script>

<template>
  <!-- might put it down to right corner so its not so intrusive to user -->
  <div
    class="alert alert-warning p-2"
    :class="[notification.notificationType === 'error' ? 'alert-danger' : 'alert-success']"
  >
    {{ notification.title }}
    <!-- TODO: WHEN I ADD ICONS -->
    <!-- <button @click="close()">CLICK TO CLOSE</button> -->
  </div>
</template>

<style lang="scss" scoped>
.alert {
  pointer-events: auto;
}
</style>
