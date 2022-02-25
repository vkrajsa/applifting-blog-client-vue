<script>
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <button class="btn" :class="customClass" :type="type" :disabled="disabled">
    <slot />
  </button>
</template>
