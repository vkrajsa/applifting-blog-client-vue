<script setup lang="ts">
import { ref, inject, toRefs } from 'vue';
import { Comment } from '@/types/comment';
import AppLink from '../components/AppLink.vue';
import ArticleComment from './ArticleComment.vue';
import ArticleCommentForm from './ArticleCommentForm';

interface Props {
  comments: Comment;
}

const comments = inject('comments');

const addComment = async (comment: ArticleComment) => {
  // IS INJECT GOOD PRACTICE? OTHERWISE I WOULD HAVE TO EMIT THE ADDCOMMENT SINCE I CANT MUTATE PROPSA
  comments.value.unshift(comment);
};
</script>

<template>
  <ArticleCommentForm @add-comment="addComment" />
  <ArticleComment v-for="comment in comments" :key="comment.commentId" :comment="comment">
    {{ comment }}
  </ArticleComment>
</template>
