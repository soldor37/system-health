<template>
  <div class="health-chart">
    <apexchart
      type="area"
      height="350"
      :options="chartOptions"
      :series="series"
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
          type: "area",
          height: 350,
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
</style>