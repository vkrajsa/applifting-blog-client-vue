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

  computed: {
    isError() {
      return this.notification.notificationType === 'error' ? 'alert-danger' : 'alert-success';
    },
  },
};
</script>

<template>
  <div class="alert p-2" :class="isError">
    <span> {{ notification.message }}</span>
    <span class="cross float-end" @click="close()"> <fa-icon icon="times" class="cross float-end" /></span>
  </div>
</template>

<style lang="scss" scoped>
.alert {
  pointer-events: auto;
}

.cross {
  &:hover {
    cursor: pointer;
  }
}
</style>
