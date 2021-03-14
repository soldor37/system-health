<template>
  <div class="content">
    <v-row>
      <!-- варианты статистики -->
      <div class="combo-wrapper mr-4">
        <v-combobox
          v-model="combo1"
          :items="statisticsVariants"
          outlined
          dense
        ></v-combobox>
      </div>

      <!-- варианты статистики -->
      <div class="combo-wrapper mr-4">
        <v-combobox
          v-model="combo2"
          :items="projectsVariants"
          outlined
          dense
        ></v-combobox>
      </div>
      <!-- выбор даты -->
      <statistics-date-picker
    /></v-row>
    <v-row class="justify-space-between">
      <v-col cols="7">
        <!-- chart -->
        <statistics-healthchart
      /></v-col>

      <v-col cols="4">
        <!-- percent circle chart -->
        <statistics-percent-chart
      /></v-col>
    </v-row>
  </div>
</template>

<script>
import StatisticsDatePicker from "./StatisticsDatePicker.vue";
import StatisticsHealthchart from "./StatisticsHealthchart.vue";
import StatisticsPercentChart from "./StatisticsPercentChart.vue";
export default {
  components: {
    StatisticsHealthchart,
    StatisticsDatePicker,
    StatisticsPercentChart,
  },
  name: "Statistics",
  data() {
    return {
      combo1: "Здоровье системы",
      statisticsVariants: [
        "Здоровье системы",
        "Предупреждения",
        "Ошибки",
        "Показатель А",
        "Показатель Б",
      ],
      combo2: "Здоровье системы",
      projectsVariants: [
        "Здоровье системы",
        "Предупреждения",
        "Ошибки",
        "Показатель А",
        "Показатель Б",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  background: $color-secondary;
  padding: 56px 156px;
  margin: -12px;
}
.combo-wrapper {
  width: 250px;
}
</style>