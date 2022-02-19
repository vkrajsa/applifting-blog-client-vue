<script>
import BaseInput from '@/components/base/BaseInput.vue';
import BaseButton from '@/components/base/BaseButton.vue';

export default {
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async logIn() {
      try {
        await this.$store.dispatch('auth/logIn', this.credentials);
        this.$router.push('/articles');
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: {
    BaseInput,
    BaseButton,
  },
};
</script>

<template>
  <form class="form-login card p-5" @submit.prevent="logIn">
    <h1 class="h3 mb-3">Please Log in</h1>
    <BaseInput v-model="credentials.username" label="Username" type="text" />
    <BaseInput v-model="credentials.password" label="Password" type="password" />
    <BaseButton customClass="btn-primary mt-3" type="submit">Log in</BaseButton>
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
