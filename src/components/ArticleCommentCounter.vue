<script setup lang="ts">
import { computed } from 'vue';
import { useComment } from '../composable/useComment';

interface Props {
  score: number;
  id: string;
}

const props = defineProps<Props>();

const { postVote, upVoted, commentScore, initScore } = useComment();

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
  <fa-icon icon="chevron-up" class="arrow" @click="!upVoted ? voteComment('up') : null" />
  |
  <fa-icon icon="chevron-down" class="arrow" @click="upVoted ? voteComment('down') : null" />
  |
</template>

<style lang="scss" scoped>
.arrow {
  &:hover {
    cursor: pointer;
  }
}
</style>
