import React from "react";
import Chart from "react-apexcharts";

const ApexChart = () => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar", // Ensure this is one of the allowed types
      toolbar: { show: true },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr"],
    },
    colors: ["#BC9A2D", "#F3E9DC", "#272727"],
  };

  const series = [
    {
      name: "Sales",
      data: [30, 40, 45, 50],
    },
  ];

  return <Chart options={options} series={series} type="bar" height={350} />;
};

export default ApexChart;
