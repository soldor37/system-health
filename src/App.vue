<template>
  <v-app>
    <!-- боковое меню -->
    <nav-menu-left v-show="$route.name !== 'Login'"></nav-menu-left>
    <v-app-bar app clipped-left color="white" dark v-show="$route.name !== 'Login'">
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

    <v-main>
      <v-container ><router-view></router-view></v-container>
      <!-- <div class="app-content d-flex">
        
      </div> -->
    </v-main>
  </v-app>
</template>

<script>
import UserMenu from "./components/header/UserMenu.vue";
import NavMenuLeft from "./components/NavMenuLeft.vue";
export default {
  components: { UserMenu, NavMenuLeft },
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import url("~@/styles/normalize.scss");
.app-content {
  height: 100%;
}
.main{
  max-width: 100%;
}
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
