<script setup lang="ts">
import { useComment } from '../composable/useComment';

interface Props {
  score: number;
  id: string;
}

const props = defineProps<Props>();

const { postVote, upVoted, commentScore, initScore } = useComment();

initScore(props.score);

async function voteComment(value: string) {
  await postVote(value, props.id);
}
</script>

<template>
  <p>{{ commentScore }}</p>
  <p @click="!upVoted ? voteComment('up') : null">VOTE UP</p>
  <p @click="upVoted ? voteComment('down') : null">VOTE DOWN</p>
</template>
