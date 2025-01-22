import React from "react";
import DashboardCard from "@/app/dashboards/shared/components/DashboardCard";
import { supabase } from "@/shared/utils/supabaseClient";
import {
  calculateRIVXScore,
  determineTier,
} from "../../../../shared/utils/rivxCalculations";

const TierBreakdown = async () => {
  const { data: influencers } = await supabase
    .from("influencer_analytics")
    .select("*");

  const tiers = {
    Silver: 0,
    Gold: 0,
    Platinum: 0,
    Diamond: 0,
    Master: 0,
    Grandmaster: 0,
    Legendary: 0,
  };

  influencers?.forEach((inf) => {
    const score = calculateRIVXScore(inf);
    const tier = determineTier(score, inf.followers);
    if (tier) tiers[tier]++;
  });

  return (
    <div className="flex flex-wrap gap-4">
      {Object.entries(tiers).map(([tier, count]) => (
        <DashboardCard
          key={tier}
          title={`${tier} Tier`}
          headtitle={count.toString()}
        />
      ))}
    </div>
  );
};

export default TierBreakdown;
