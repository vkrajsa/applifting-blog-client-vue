<script setup lang="ts">
import BaseInput from '../components/base/BaseInput.vue';
import BaseButton from '../components/base/BaseButton.vue';
import BaseError from '../components/base/BaseError.vue';

import { PostLogin } from '../types/user';
import store from '../store/index';
import router from '../router/index';

import { reactive, ref, Ref } from 'vue';

const form = reactive<PostLogin>({
  username: '',
  password: '',
});

const loader: Ref<boolean | null> = ref(null);

let errorMsg = ref('');

const login = async () => {
  try {
    loader.value = true;
    await store.dispatch('user/logIn', form);
    router.push('/articles');
  } catch (error: unknown) {
    console.log(error.response.status);
    let message = 'Something went wrong';
    if (error.response.status === 400) message = 'Invalid password or username';
    errorMsg.value = message;
  } finally {
    loader.value = false;
  }
};
</script>

<template>
  <form class="form-login card p-5" @submit.prevent="login">
    <h1 class="h3 mb-3">Please Log in</h1>
    <BaseInput v-model="form.username" label="Username" type="text" required />
    <BaseInput v-model="form.password" label="Password" type="password" required />
    <BaseButton class="btn-success mt-3" type="submit" :loader="loader" :disabled="!form.username || !form.password"
      >Log in</BaseButton
    >
    <BaseError v-if="!!errorMsg">{{ errorMsg }}</BaseError>
  </form>
</template>

<style lang="scss" scoped>
.form {
  &-login {
    max-width: 330px;
    margin: auto;
  }
}
</style>
