<script setup lang="ts">
import { Comment } from '@/types/comment';
import AppLink from '../components/AppLink.vue';
import ArticleComment from './ArticleComment.vue';
import ArticleCommentForm from './ArticleCommentForm';

interface Props {
  comments: Comment;
}

const props = defineProps<Props>();
</script>

<template>
  <ArticleCommentForm />
  <ArticleComment v-for="comment in comments" :key="comment.commentId" :comment="comment">
    {{ comment }}
  </ArticleComment>
</template>
