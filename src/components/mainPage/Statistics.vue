<template>
  <v-row class="content d-flex justify-space-between align-center">
    <v-col cols="8">
      <div class="d-flex">
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
        <statistics-date-picker />
      </div>
      <!-- chart -->
      <statistics-healthchart />
    </v-col>
    <!-- percent circle chart -->
    <v-col cols="4">
      <statistics-percent-chart />
    </v-col>
  </v-row>
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
}
.combo-wrapper {
  width: 250px;
}
</style>