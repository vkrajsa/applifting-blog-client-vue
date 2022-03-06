<script setup lang="ts">
import { ref, inject, toRefs, onBeforeUnmount } from 'vue';
import { Comment } from '@/types/comment';
import AppLink from '../components/AppLink.vue';
import ArticleComment from './ArticleComment.vue';
import ArticleCommentForm from './ArticleCommentForm';

interface Props {
  comments: Comment;
}

const comments = inject('comments');

const socket = new WebSocket(process.env.VUE_APP_WS);

socket.onmessage = async function (event) {
  const data = JSON.parse(event.data);
  // push newly created comment to top
  if (data.changeType === 'commentCreated') {
    comments.value.unshift(data.comment);
  }

  // replace whole comment with websocket data
  // TODO if time: i would refactor it and would use WS to send data as well
  if (data.changeType === 'commentUpVoted' || data.changeType === 'commentDownVoted') {
    const index = comments.value.findIndex((x) => {
      return x.commentId === data.comment.commentId;
    });
    if (index !== -1) {
      comments.value[index] = data.comment;
    }
  }
};

onBeforeUnmount(() => {
  socket.close();
});
</script>

<template>
  <div id="comments">
    <ArticleCommentForm />
    <ArticleComment v-for="comment in comments" :key="comment.commentId" :comment="comment" />
  </div>
</template>

<style>
#comments {
  max-width: 600px;
  margin: 0 auto;
}
</style>
