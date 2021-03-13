<template>
  <v-navigation-drawer permanent dark color="primary" width="300">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> Меню </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="(item, i) in menuItems" :key="i" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          icon: "mdi-home",
          title: "Главная",
        },
        {
          icon: "mdi-folder-outline",
          title: "Проекты",
        },
        {
          icon: "mdi-chart-pie",
          title: "Модели",
        },
        {
          icon: "mdi-cog-transfer-outline",
          title: "Настройки",
        },
        {
          icon: "mdi-shield-account-variant",
          title: "Администрирование",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>