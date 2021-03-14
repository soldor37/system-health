<template>
  <div class="health-chart">
    <apexchart
      type="area"
      height="350"
      :options="chartOptions"
      :series="series"
      style="width: 100%"
    ></apexchart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [
        {
          name: "Здоровье системы",
          data: ["10", "30", "20", "50", "60", "40", "90"],
        },
      ],
      chartOptions: {
        chart: {
          redrawOnParentResize: false,
           redrawOnWindowResize: false,
          type: "area",
          height: 360,
          width: "100%",
          foreColor: "black",
          fontFamily: "Lato, sans-serif",
          zoom: {
            enabled: false,
          },
        },
        colors: ["#48BBC8"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },

        title: {
          text: "Здоровье системы",
          align: "left",
          style: {
            fontSize: "16px",
            fontWeight: "normal",
            color: "black",
          },
        },
        labels: [
          "Июл ‘20",
          "Авг ‘20",
          "Сен ‘20",
          "Окт ‘20",
          "Ноя ‘20",
          "Дек ‘20",
          "2021",
        ],
        xaxis: {
          type: "string",
        },
        yaxis: {
          opposite: false,
        },
        legend: {
          horizontalAlign: "left",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.health-chart{
    z-index: 0;
    width: 100%;
}
</style>