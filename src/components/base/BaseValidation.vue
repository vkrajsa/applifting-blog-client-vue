<script>
export default {
  props: {
    errors: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<template>
  <div class="alert alert-warning p-2 mt-2" role="alert" v-for="error in errors" :key="error.$uid">
    {{ error.$message }}
  </div>
</template>
