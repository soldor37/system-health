<template>
  <!-- выбор даты -->
  <div class="datepicker-wrapper">
    <v-dialog
      ref="dialog"
      v-model="dateFilterModal"
      :return-value.sync="filterDate"
      persistent
      width="350px"
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
</template>

<script>
export default {
  data() {
    return {
        filterDate: [],
      dateFilterModal: false,
      deleteModalShow: false,
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
</style>