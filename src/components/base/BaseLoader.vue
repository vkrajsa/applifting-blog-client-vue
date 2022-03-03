<script>
props: ['color'];
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="spinner-border" :color="color">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>
