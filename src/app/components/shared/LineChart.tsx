import React from "react";

const LineChart = ({
  data,
  categories,
}: {
  data: number[];
  categories: string[];
}) => {
  return (
    <div>
      <h3>Line Chart</h3>
      <p>Categories: {categories.join(", ")}</p>
      <p>Data: {data.join(", ")}</p>
    </div>
  );
};

export default LineChart;
