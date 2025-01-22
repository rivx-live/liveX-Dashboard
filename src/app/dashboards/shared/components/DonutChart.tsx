import React from "react";

const DonutChart = ({ data, labels }: { data: number[]; labels: string[] }) => {
  return (
    <div>
      <h3>Donut Chart</h3>
      <p>Labels: {labels.join(", ")}</p>
      <p>Data: {data.join(", ")}</p>
    </div>
  );
};

export default DonutChart;
