<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <!-- лого -->
      <div class="d-flex align-center">
        <v-img
          alt="DSM Logo"
          class="shrink mr-2"
          contain
          src="~@/assets/svg/header/logo.svg"
          width="150"
        />
      </div>

      <v-spacer></v-spacer>
      <!-- user panel -->
      <div class="user-panel d-flex align-center">
        <v-avatar class="user-panel__avatar" color="primary">
          <span class="white--text headline">П</span>
        </v-avatar>
        <div class="user-panel__user-info d-flex flex-column ml-3">
          <div class="user-panel__name">Петр Иванов</div>
          <div class="user-panel__email">User@gmail.com</div>
        </div>
      </div>
      <!-- выпадающее меню -->
      <user-menu></user-menu>
    </v-app-bar>
    <!-- боковое меню -->
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import UserMenu from "./components/header/UserMenu.vue";
export default {
  components: { UserMenu },
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import url("~@/styles/normalize.scss");

.user-panel {
  color: black;
  border-right: 1px solid rgba($color: black, $alpha: 0.1);
  white-space: nowrap;
  &__user-info {
    width: 200px;
    margin-right: 6px;
    overflow: hidden;
  }
  &__name {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.0179em;
  }
  &__email {
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.0333em;
    opacity: 0.37;
  }
}
</style>
