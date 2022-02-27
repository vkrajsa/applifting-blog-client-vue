<script setup lang="ts">
import { Comment } from '../types/comment';
import ArticleCommentCounter from './ArticleCommentCounter.vue';

interface Props {
  comment: Comment;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="card">
    <p>{{ props.comment.author }} at {{ props.comment.createdAt }}</p>
    <p>{{ props.comment.content }}</p>
    <ArticleCommentCounter :score="props.comment.score" :id="props.comment.commentId"> </ArticleCommentCounter>
  </div>
</template>
