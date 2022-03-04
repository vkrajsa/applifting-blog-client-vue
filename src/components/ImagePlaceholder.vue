<script>
export default {
  props: ['width', 'height', 'color'],
  computed: {
    cssAttrs() {
      return {
        /* variables you want to pass to css */
        '--width': this.width + 'px',
        '--height': this.height + 'px',
        '--color': this.color,
      };
    },
  },
};
</script>

<template>
  <div class="placeholder d-flex align-items-center justify-content-center" :style="cssAttrs">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.placeholder {
  width: var(--width);
  height: var(--height);
}
</style>
