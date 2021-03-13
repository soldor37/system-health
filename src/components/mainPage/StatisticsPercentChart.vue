<template>
  <div class="percent-chart d-flex align-center flex-column">
    <div class="chart">
      <apexchart
        type="radialBar"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>

    <!-- кол-во ошибок предупреждений -->
    <div class="stats">
      <div class="stats__stat d-flex align-center">
        <v-icon color="warning">mdi-alert</v-icon>
        <div class="text ml-3">Предупреждений</div>
        <v-spacer></v-spacer>
        <div class="count">54</div>
      </div>
      <div class="stats__stat d-flex align-center">
        <v-icon color="error ">mdi-alert-circle</v-icon>
        <div class="text ml-3">Ошибок</div>
        <v-spacer></v-spacer>
        <div class="count">4</div>
      </div>
    </div>
    <!-- доп параметры -->
    <!-- <div class="additional">
        <div class="additional__title">Доп. параметры</div>
        
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [90],
      chartOptions: {
        chart: {
          height: 350,
          type: "radialBar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: {
              margin: 0,
              size: "75%",
              background: "transparent",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
            },
            track: {
              background: "black",
              strokeWidth: "100%",
              margin: 0,
              opacity: 0.2,
            },

            dataLabels: {
              show: true,
              name: {
                offsetY: -30,
                show: true,
                color: "black",
                fontSize: "14px",
              },
              value: {
                formatter: function (val) {
                  return parseInt(val) + "%";
                },
                color: "black",
                fontSize: "68px",
                show: true,
              },
            },
          },
        },
        fill: {
          colors: ["#48BBC8"],
          opacity: 1,
          type: "solid",
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Здоровье системы"],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.stats {
  background: white;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.0333em;
  width: 250px;
  height: 60px;
  padding: 6px 12px;
  &__stat {
    .text {
      opacity: 0.6;
    }
  }
}
</style>