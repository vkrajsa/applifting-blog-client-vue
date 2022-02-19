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
  },
};
</script>

<template>
  <button class="btn" :class="customClass" :type="type">
    <slot />
  </button>
</template>
