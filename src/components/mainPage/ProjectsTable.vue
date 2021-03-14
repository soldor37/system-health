<template>
  <div class="ProjectsTable">
    <div class="top-actions d-flex justify-space-between mb-5">
      <div class="top-actions__newBtn">
        <v-btn color="primary" dark width="250">Создать проект</v-btn>
      </div>
      <div class="top-actions__search">
        <v-text-field
          dense
          height="40"
          hide-details
          placeholder="Поиск"
          outlined
          prepend-inner-icon="mdi-magnify"
          v-model="search"
        ></v-text-field>
      </div>
    </div>
    <v-data-table
      :headers="filteredHeaders"
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
          <v-menu
            offset-y
            left
            class="table-settings"
            :close-on-content-click="false"
          >
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

            <v-list flat>
              <v-list-item-group v-model="pickedSettings" multiple>
                <v-list-item
                  v-for="(item, i) in settingsItems"
                  class="table-settings__item"
                  :key="i"
                  :value="item"
                  active-class="transparent"
                >
                  <template v-slot:default="{ active }">
                    <v-list-item-content>
                      <v-list-item-title v-text="item"></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-checkbox
                        :input-value="active"
                        color="primary"
                      ></v-checkbox>
                    </v-list-item-action>
                  </template>
                  <!-- <v-list-item-title
                    class="table-settings__item-title"
                    v-text="item.text"
                  ></v-list-item-title>
                  <v-list-item-action>
                    <v-checkbox
                      :input-value="item.active"
                      color="primary"
                    ></v-checkbox>
                  </v-list-item-action> -->
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </v-toolbar>
      </template>
      <!-- Actions -->
      <template v-slot:[`item.actions`]>
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
        { text: "Параметр", value: "anonymous" },
        { text: "Здоровье проекта", value: "opened" },
        { text: "", value: "actions", sortable: false },
      ],
      // хедеры для вкл/откл в таблице
      settingsItems: [
        "Номер",
        "Название проекта",
        "Автор проекта",
        "Параметр",
        "Здоровье проекта",
      ],
      // показываемые хедеры
      pickedSettings: [
        "Номер",
        "Название проекта",
        "Автор проекта",
        "Параметр",
        "Здоровье проекта",
        "",
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
    initProjects() {
      for (let i = 0; i <= 7; i++) {
        this.projects.push({
          code: `0000${i}`,
          name: `Project_name_${i}`,
          anonymous: true,
          opened: false,
          bimUser: {
            username: `username_${i}`,
          },
        });
      }
    },
  },
  computed: {
    filteredHeaders() {
      return this.headers.filter((item) => {
        return this.pickedSettings.includes(item.text);
      });
    },
  },
  created() {
    // this.getProjects();
    this.initProjects()
  },
};
</script>

<style lang="scss" scoped>
.ProjectsTable {
  padding: 56px 156px;
}
.table-settings {
  &__item {
  }
  &__title {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.03125em;
    opacity: 0.6;
  }
}
</style>