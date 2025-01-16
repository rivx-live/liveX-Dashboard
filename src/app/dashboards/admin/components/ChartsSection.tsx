import React from "react";
import BlankCard from "@/app/components/shared/BlankCard";
import LineChart from "@/app/components/shared/LineChart";
import DonutChart from "@/app/components/shared/DonutChart";

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
