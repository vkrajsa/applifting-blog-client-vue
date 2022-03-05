<script>
import BaseLoader from './BaseLoader.vue';

export default {
  props: {
    customClass: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'button',
    },
    loader: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BaseLoader,
  },
};
</script>

<template>
  <button class="btn" :type="type" :disabled="disabled">
    <BaseLoader v-if="loader" />
    <slot />
  </button>
</template>
