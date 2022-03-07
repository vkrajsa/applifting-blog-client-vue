<script setup lang="ts">
import { inject, defineEmits, ref } from 'vue';
import BaseInput from '../components/base/BaseInput.vue';
import BaseButton from '../components/base/BaseButton.vue';
import { CommentForm, Comment } from '../types/comment';
import { useComment } from '../composable/useComment';
import { reactive } from 'vue';

const { addComment, commentLoader } = useComment();
const articleId = inject('articleId');

const form = reactive<CommentForm>({
  author: '',
  content: '',
});

const showForm = ref(null);

function showCommentForm(value = true) {
  showForm.value = value;
}

async function postForm() {
  const result = await addComment({ articleId, ...form });
  form.author = '';
  form.content = '';
}
</script>

<template>
  <div class="card mt-4">
    <div class="card-header" v-show="showForm">
      <fa-icon icon="times" class="cross float-end" @click="showCommentForm(false)" />
    </div>
    <div class="card-body">
      <form @submit.prevent="postForm">
        <BaseInput
          v-show="showForm"
          v-model="form.author"
          class="col-6 col-md-4"
          label="Your name"
          type="no-label"
          required
        />
        <BaseInput
          v-model="form.content"
          label="Join discussion"
          placeholder=""
          :rows="showForm ? 5 : 2"
          type="no-label"
          :textarea="true"
          @click="showCommentForm"
          required
        />
        <BaseButton
          v-show="showForm"
          :loader="commentLoader"
          class="btn-primary mt-3 float-end"
          type="submit"
          :disabled="!form.author || !form.content"
          >Add comment</BaseButton
        >
      </form>
    </div>
  </div>
</template>
