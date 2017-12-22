<template>
  <div class="login-view">
    <h3>Sign In</h3>
    <input
      type="text"
      placeholder="Email"
      class="login-view__input"
      v-model="email"
    ><br>
    <input
      type="password"
      placeholder="Password"
      class="login-view__input"
      v-model="password"
    ><br>
    <button
      class="login-view__button"
      @click="signIn"
    >
      Увійти
    </button>
    <p class="login-view__paragraph">You don`t have account? You can <router-link to="/sign-up">create one</router-link>.</p>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'login-view',

  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        () => {
          this.$router.replace('hello');
        },
        err => alert(`Ooops. ${err.message}`),
      );
    },
  },
};
</script>

<style lang="scss">
.login-view {
  margin-top: 40px;

  &__input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }

  &__button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }

  &__paragraph {
    margin-top: 40px;
    font-size: 13px;
  }

  &__link {

  }
}
</style>
