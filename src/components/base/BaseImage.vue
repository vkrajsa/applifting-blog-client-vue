<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: 'This is an image of....',
    },
    width: {
      type: String,
      default: '200',
    },
    height: {
      type: String,
      default: '200',
    },
  },

  computed: {
    cssAttrs() {
      return {
        /* variables you want to pass to css */
        '--width': this.width + 'px',
        '--height': this.height + 'px',
        '--url': 'url(' + this.url + ')',
      };
    },
  },
};
</script>

<template>
  <div class="wrapper" :style="cssAttrs">
    <!-- USED BACGKROUND IMG TO GET CONSISTENCY IN PREVIEW MIGHT USE IMG LATER-->
    <!-- <img :src="url" class="img-fluid rounded-start" :alt="alt" :width="width" :height="height" /> -->
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: var(--width);
  height: var(--height);
  background-image: var(--url);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
