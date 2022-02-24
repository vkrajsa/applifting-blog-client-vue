<script>
import BaseInput from '@/components/base/BaseInput.vue';
import BaseValidation from '@/components/base/BaseValidation.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import useVuelidate from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';

export default {
  components: {
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
    };
  },
  validations() {
    return {
      credentials: {
        username: {
          required: helpers.withMessage('Please fill your name.', required),
        },
        password: {
          required: helpers.withMessage('Please fill your password.', required),
        },
      },
    };
  },
  methods: {
    async logIn() {
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      }

      try {
        console.log(this.$store);
        await this.$store.dispatch('user/logIn', this.credentials);
        this.$router.push('/articles');
      } catch (error) {
        // TODO: handle loading state, display wrong password/username optionally
      }
    },
  },
};
</script>

<template>
  <form class="form-login card p-5" @submit.prevent="logIn">
    <h1 class="h3 mb-3 message">Please Log in</h1>
    <BaseInput v-model="credentials.username" label="Username" type="text" data-username />
    <BaseValidation :errors="v$.credentials.username.$errors" />
    <BaseInput v-model="credentials.password" label="Password" type="password" />

    <BaseValidation :errors="v$.credentials.password.$errors" />

    <BaseButton custom-class="btn-primary mt-3" type="submit">Log in</BaseButton>
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
