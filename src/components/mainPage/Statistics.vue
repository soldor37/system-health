<template>
  <div class="content">
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
      <div class="datepicker-wrapper">
        <v-dialog
          ref="dialog"
          v-model="dateFilterModal"
          :return-value.sync="filterDate"
          persistent
          width="250px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateRangeText"
              label="Период"
              prepend-inner-icon="mdi-calendar"
              readonly
              dense
              outlined
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            range
            selected-items-text="Период выбран"
            locale="ru-Latn"
            first-day-of-week="1"
            v-model="filterDate"
            scrollable
            color="primary"
          >
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="dateFilterModal = false">
              Отмена
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="
                $refs.dialog.save(filterDate);
                pickedFilter = 'date';
              "
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog>
      </div>
    </div>
    <!-- chart -->
    <statistics-healthchart />
  </div>
</template>

<script>
import StatisticsHealthchart from './StatisticsHealthchart.vue';
export default {
  components: { StatisticsHealthchart },
  name: "Statistics",
  data() {
    return {
      filterDate: [],
      dateFilterModal: false,
      deleteModalShow: false,

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
  methods: {
    convertDate(rowDate) {
      let dateParts = rowDate.split("-");
      return [dateParts[2], dateParts[1], dateParts[0]].join(".");
    },
  },
  computed: {
    dateRangeText() {
      if (this.filterDate.length < 2) return;
      let startDate = new Date(this.filterDate[0]).setHours(0, 0, 0, 0);
      let endDate = new Date(this.filterDate[1]).setHours(0, 0, 0, 0);
      if (+startDate >= endDate) {
        return (
          this.convertDate(this.filterDate[1]) +
          " — " +
          this.convertDate(this.filterDate[0])
        );
      } else {
        return (
          this.convertDate(this.filterDate[0]) +
          " — " +
          this.convertDate(this.filterDate[1])
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  background: $color-secondary;
  padding: 56px 156px;
}
.combo-wrapper{
    width: 250px;
}
</style>