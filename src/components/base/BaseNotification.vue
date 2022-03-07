<script>
import { mapActions } from 'vuex';

export default {
  props: {
    notification: {
      type: Object,
    },
  },

  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 5000);
  },

  beforeUnmount() {
    clearTimeout(this.timeout);
  },

  methods: {
    ...mapActions('notifications', ['remove']),

    close() {
      this.remove(this.notification);
    },
  },
};
</script>

<template>
  <div class="alert p-2" :class="this.notification.notificationType()">
    <span> {{ notification.message }}</span>
    <span class="cross float-end" @click="close()"> <fa-icon icon="times" class="cross float-end" /></span>
  </div>
</template>

<style lang="scss">
.alert {
  pointer-events: auto;
}

.cross {
  &:hover {
    cursor: pointer;
  }
}
</style>
