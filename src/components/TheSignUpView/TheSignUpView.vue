<template>
  <div class="sign-up-view">
    <p class="sign-up-view__paragraph">
      Давайте створимо новий акаунт!
    </p>
    <input
      type="text"
      placeholder="Email"
      class="sign-up-view__input"
      v-model="email"
    ><br>
    <input
      type="password"
      placeholder="Password"
      class="sign-up-view__input"
      v-model="password"
    ><br>
    <button
      class="sign-up-view__button"
      @click="signUp"
    >Sign Up</button>
    <span class="sign-up-view__text">or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'sign-up-view',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        () => {
          this.$router.replace('hello');
        },
        err => alert(`Opps. ${err.message}`),
      );
    },
  },
};
</script>

<style lang="scss">
  .sign-up-view {
    margin-top: 40px;

    &__input {
      margin: 10px 0;
      width: 20%;
      padding: 15px;
    }

    &__button {
      margin-top: 10px;
      width: 10%;
      cursor: pointer;
    }

    &__text {
      display: block;
      margin-top: 20px;
      font-size: 11px;
    }

    &__paragraph {

    }
  }
</style>
