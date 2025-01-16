import React from "react";
import MetricsSection from "../../components/MetricsSection";
import TierBreakdown from "../../components/TierBreakdown";
import ChartsSection from "./ChartsSection";
import ActivityTable from "../../components/ActivityTable";

const DashboardPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Metrics Cards */}
      <MetricsSection />

      {/* Tier Breakdown */}
      <TierBreakdown />

      {/* Charts Section */}
      <ChartsSection />

      {/* Activity Tables */}
      <ActivityTable />
    </div>
  );
};

export default DashboardPage;
