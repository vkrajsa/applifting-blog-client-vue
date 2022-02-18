<script>
import { mapActions } from 'vuex';

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
        console.log('logged in successfully');
      } catch (error) {
        console.log('error');
      }
    },
  },
};
</script>

<template>
  <form class="form-login card p-5" @submit.prevent="logIn">
    <h1 class="h3 mb-3">Please Log in</h1>

    <div class="form-floating">
      <input
        v-model="credentials.username"
        type="text"
        class="form-control"
        id="floatingInput"
        placeholder="Username"
      />
      <label for="floatingInput">Username</label>
    </div>
    <div class="form-floating">
      <input
        v-model="credentials.password"
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <label for="floatingPassword">Password</label>
    </div>

    <button class="w-100 btn btn-lg btn-primary mt-4" type="submit">Log in</button>
  </form>
</template>

<style lang="scss" scoped>
.form {
  &-login {
    max-width: 330px;
    margin: auto;

    input[type='email'] {
      margin-bottom: -1px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }

    input[type='password'] {
      margin-bottom: 10px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  &-floating {
    :focus-within {
      z-index: 2;
    }
  }
}
</style>
