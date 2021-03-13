<template>
  <v-container>
    <v-card elevation="1" class="form" @keydown.enter="submit">
      <v-card-title class="text-center title">Вход</v-card-title>
      <div class="error-message" v-show="!valid">
        Логин или пароль введены неверно. Попробуйте еще раз или обратитесь к
        администратору
      </div>
      <v-card-text style="padding: 0">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            color="primary"
            label="Логин"
            name="login"
            type="text"
            :rules="[rules.required]"
            v-model="username"
            outlined
            class="input"
          />

          <v-text-field
            color="primary"
            id="password"
            class="input"
            label="Пароль"
            name="password"
            v-model="password"
            outlined
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-card-actions style="align-self: flex-end; padding: 0; width: 100%">
        <v-btn class="login-btn" color="primary" @click="submit">Войти</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      valid: false,
      username: "",
      password: "",
      showPassword: false,
      rules: {
        required: (value) => !!value || "Обязательное поле",
        min: (v) => v.length >= 6 || "Минимум 6 символов",
        error: () =>
          `Логин или пароль введены неверно. Попробуйте еще раз или обратитесь к администратору`,
      },
    };
  },
  methods: {
    submit() {
      let md5 = require('md5')
      if (this.$refs.form.validate() && this.valid) {
        return new Promise((resolve, reject) => {
          this.$store
            .dispatch("authorization/login", {
              username: this.username,
              password: md5(this.password),
            })
            .then((resp) => {
              // если нужно перенаправление на страницу
              if (this.next_url) {
                this.$router.push({ path: this.next_url });
              } else {
                // иначе отправить на главную
                this.$router.push({ name: "Main" });
              }
              resolve(resp);
            })
            .catch((err) => {
              reject(err);
            });
        });
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.form {
  width: 358px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px 40px 34px 40px;
  border-radius: 8px !important;
  .title {
    color: #333333 !important;
    font-size: 24px !important;
    line-height: 28px !important;
  }
  .error-message {
    width: 100%;
    text-align: center;
    font-family: inherit;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #F44336;
    margin-bottom: 10px;
  }
  .input {
    border-radius: 4px !important;
  }
  .login-btn {
    color: white;
    font-size: 16px !important;
    line-height: 19px !important;
    width: 100%;
    height: 52px;
    border-radius: 4px !important;
  }
}
</style>