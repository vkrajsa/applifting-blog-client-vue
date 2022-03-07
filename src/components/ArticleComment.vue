<script setup lang="ts">
import { Comment } from '../types/comment';
import ArticleCommentCounter from './ArticleCommentCounter.vue';
import { timeAgo } from '../utils/date-format';

interface Props {
  comment: Comment;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="card mt-4">
    <div class="card-header">
      <span class="fw-bold"> {{ props.comment.author }} </span> {{ timeAgo(props.comment.createdAt) }}
    </div>
    <div class="card-body">
      <p class="card-text">{{ props.comment.content }}</p>
    </div>

    <div class="card-footer">
      {{ props.comment.score }}
      <ArticleCommentCounter :score="props.comment.score" :id="props.comment.commentId"> </ArticleCommentCounter>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
