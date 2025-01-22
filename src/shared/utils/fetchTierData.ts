import { supabase } from "./supabaseClient";

export const fetchTierData = async () => {
  // Fetch data from the 'influencer_analytics' table
  const { data, error } = await supabase
    .from("influencer_analytics")
    .select("tier, rivx_score");

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  // Process data: group by tier and calculate count + average RIVX score
  const groupedData = data.reduce((acc: any, influencer: any) => {
    const { tier, rivx_score } = influencer;

    // If this tier doesn't exist in the accumulator, initialize it
    if (!acc[tier]) {
      acc[tier] = { tier, influencerCount: 0, totalScore: 0 };
    }

    // Increment count and add RIVX score
    acc[tier].influencerCount += 1;
    acc[tier].totalScore += rivx_score;

    return acc;
  }, {});

  // Convert the grouped data into an array
  return Object.values(groupedData).map((group: any) => ({
    tier: group.tier,
    influencerCount: group.influencerCount,
    averageRIVXScore: (group.totalScore / group.influencerCount).toFixed(1), // Calculate average
  }));
};
