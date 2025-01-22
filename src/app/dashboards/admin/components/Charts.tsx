import React from "react";
import BlankCard from "@/app/dashboards/shared/components/BlankCard";
import LineChart from "@/app/dashboards/shared/components/LineChart";
import DonutChart from "@/app/dashboards/shared/components/DonutChart";

const ChartsSection = () => (
  <div className="flex flex-wrap gap-4">
    <BlankCard title="Influencer Growth">
      <LineChart data={[30, 45, 60]} categories={["Jan", "Feb", "Mar"]} />
    </BlankCard>
    <BlankCard title="Certified vs Non-Certified">
      <DonutChart data={[60, 40]} labels={["Certified", "Non-Certified"]} />
    </BlankCard>
  </div>
);

export default ChartsSection;
