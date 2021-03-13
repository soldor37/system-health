<template>
  <v-row align="center" justify="center" class="page-content">
    <v-col align="center" justify="center">
      <v-row align="center" justify="center">
        <transition name="form-fade"><LoginForm v-if="showForm" /></transition>
      </v-row> </v-col
  ></v-row>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "Login",
  data() {
    return {
      showForm: false,
    };
  },
  components: {
    LoginForm,
  },
  created() {
    setTimeout(() => (this.showForm = true), 300);
  },
};
</script>

<style lang="scss" scoped>
.page-content {
  height: 100vh;
  width: 100vw;
  position: fixed;
  margin: 0 !important;
  top: 0;
  background: #F3F8FD;
}
.login {
  position: relative;
}
// плавное появление формы логина
.form-fade-enter-active,
.form-fade-leave-active {
  transition: opacity 1s;
}
.form-fade-enter {
  opacity: 0;
}
</style>
