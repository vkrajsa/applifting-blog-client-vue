<script>
export default {
  props: {
    color: {
      type: String,
      default: null,
    },
    button: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<template>
  <div v-if="button" class="d-inline justify-content-center">
    <div class="spinner-border spinner-border-sm me-2" :class="color">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <div v-else class="d-flex justify-content-center">
    <div class="spinner-border" :class="color">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>
