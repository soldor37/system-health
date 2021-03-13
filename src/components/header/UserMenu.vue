<template name='UserMenu'>
  <v-menu offset-y class="user-menu">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="user-menu__btn"
        color="primary"
        text
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, i) in userPanelItems"
        class="user-menu__item"
        :key="i"
        @click="item.action == 'logout' ? logout() : null"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon" color="primary"></v-icon>
        </v-list-item-icon>
        <v-list-item-title
          class="user-menu__item-title"
          v-text="item.title"
        ></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "UserMenu",
  data() {
    return {
      userPanelItems: [
        {
          icon: "mdi-cog-outline",
          title: "Настройки",
          action: null,
        },
        {
          icon: "mdi-brightness-6",
          title: "Темная тема",
          action: null,
        },
        {
          icon: "mdi-exit-to-app",
          title: "Выйти",
          action: "logout",
        },
      ],
    };
  },
  methods: {
    // выход из уч. записи
    logout() {
      this.$store
        .dispatch("authorization/logout")
        .then(() => this.$router.push({ name: "Login" }))
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.user-menu {
  &__btn {
  }
  &__item {
    &:hover > &-title {
      opacity: 1;
    }
  }
  &__item-title {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.03125em;
    opacity: 0.6;
  }
}
</style>