<template>
  <div class="main">
    <projects-table />
  </div>
</template>

<script>
import ProjectsTable from "../components/mainPage/ProjectsTable.vue";
export default {
  components: { ProjectsTable },
  name: "Main",
};
</script>

<style lang="scss" scoped>
.main{
  width: 100vw;
  padding: 56px 156px;
}
</style>
