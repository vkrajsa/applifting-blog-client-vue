<script>
export default {
  props: ['color'],
};
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="spinner-border" :class="color">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>
