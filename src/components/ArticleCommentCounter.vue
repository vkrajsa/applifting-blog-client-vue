<script setup lang="ts">
import { computed } from 'vue';
import { useComment } from '../composable/useComment';

interface Props {
  score: number;
  id: string;
}

const props = defineProps<Props>();

const { postVote, voteState, commentScore, initScore } = useComment();

const score = computed(() => {
  return commentScore.value > 0 ? `+${commentScore.value}` : commentScore.value;
});

initScore(props.score);

async function voteComment(value: string) {
  await postVote(value, props.id);
}
</script>

<template>
  {{ score }}
  |
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
