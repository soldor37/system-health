<template name="ProjectsTable">
  <div class="ProjectsTable">
    <div class="top-actions d-flex justify-space-between mb-5">
      <div class="top-actions__newBtn">
          <v-btn color="primary" dark>Создать проект</v-btn>
      </div>
      <div class="top-actions__search">
        <v-text-field dense height="40" hide-details placeholder="Поиск" outlined prepend-inner-icon="mdi-magnify" v-model="search"></v-text-field>
      </div>
    </div>
    <v-data-table
      :headers="headers"
      :items="projects"
      :search="search"
      sort-by="calories"
      class="elevation-1"
      hide-default-footer
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Проекты</v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- настройки показа в таблице -->
          <v-menu offset-y class="table-settings">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="table-settings__btn"
                color="primary"
                text
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-cog-outline</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in tableSettingsItems"
                class="table-settings__item"
                :key="i"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon" color="primary"></v-icon>
                </v-list-item-icon>
                <v-list-item-title
                  class="table-settings__item-title"
                  v-text="item.title"
                ></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </template>
      <!-- Actions -->
      <template v-slot:actions>
        <v-icon small class="mr-2"> mdi-pencil </v-icon>
        <v-icon small> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="getProjects"> Reset </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProjectsTable",
  data() {
    return {
      search: "",
      projects: [],
      headers: [
        {
          text: "Номер",
          align: "start",
          value: "code",
        },
        { text: "Название проекта", value: "name" },
        { text: "Автор проекта", value: "bimUser.username" },
        { text: "Параметр", value: "anonimous" },
        { text: "Здоровье проекта", value: "opened" },
        { text: "", value: "actions", sortable: false },
      ],
      tableSettingsItems: [
        {
          icon: "mdi-cog-outline",
          title: "Настройки",
        },
        {
          icon: "mdi-brightness-6",
          title: "Темная тема",
        },
        {
          icon: "mdi-exit-to-app",
          title: "Выйти",
        },
      ],
    };
  },
  methods: {
    getProjects() {
      return new Promise((resolve, reject) => {
        axios
          .get("projects")
          .then((resp) => {
            this.projects = resp.data;
            resolve(resp);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<style lang="scss" scoped>
</style>