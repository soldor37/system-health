<template>
  <div class="main">
    <!-- статистика -->
    <statistics />
    <!-- таблица проектов -->
    <projects-table />
  </div>
</template>

<script>
import ProjectsTable from "../components/mainPage/ProjectsTable.vue";
import Statistics from "../components/mainPage/Statistics.vue";
export default {
  name: "Main",
  components: { ProjectsTable, Statistics },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  background: white;
}
</style>
