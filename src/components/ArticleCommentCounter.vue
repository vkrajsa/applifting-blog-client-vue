<script setup lang="ts">
interface Props {
  score: number;
}

const props = defineProps<Props>();
</script>

<template>
  <p>{{ props.score }}</p>
  <p>VOTE UP</p>
  <p>VOTE DOWN</p>
</template>
