<script setup lang="ts">
import { computed } from 'vue';
import { useComment } from '../composable/useComment';

interface Props {
  score: number;
  id: string;
}

const props = defineProps<Props>();

const { postVote, voteState } = useComment();

async function voteComment(value: string) {
  await postVote(value, props.id);
}
</script>

<template>
  <fa-icon icon="chevron-up" class="arrow" :class="{ 'text-primary': voteState === 'up' }" @click="voteComment('up')" />
  |
  <fa-icon
    icon="chevron-down"
    class="arrow"
    :class="{ 'text-primary': voteState === 'down' }"
    @click="voteComment('down')"
  />
  |
</template>

<style lang="scss" scoped>
.arrow {
  &:hover {
    cursor: pointer;
  }
}
</style>
