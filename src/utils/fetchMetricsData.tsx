import { supabase } from "./supabaseClient"; // Ensure the correct path

type Metrics = {
  totalInfluencers: number;
  averageRIVXScore: number;
  totalSessions: number;
};

export const fetchMetricsData = async (): Promise<Metrics> => {
  const metrics: Metrics = {
    totalInfluencers: 0,
    averageRIVXScore: 0,
    totalSessions: 0,
  };

  try {
    // Fetch total influencers
    const { count: influencersCount, error: influencersError } = await supabase
      .from("influencer_analytics")
      .select("*", { count: "exact", head: true });

    if (influencersError) {
      console.error("Error fetching influencers count:", influencersError);
    } else {
      metrics.totalInfluencers = influencersCount ?? 0;
    }

    // Fetch average RIVX score
    const { data: influencersData, error: scoreError } = await supabase
      .from("influencer_analytics")
      .select("rivx_score");

    if (scoreError) {
      console.error("Error fetching RIVX scores:", scoreError);
    } else if (influencersData && influencersData.length > 0) {
      const totalScore = influencersData.reduce(
        (sum, row) => sum + (row.rivx_score || 0),
        0,
      );
      metrics.averageRIVXScore = parseFloat(
        (totalScore / influencersData.length).toFixed(1),
      );
    }

    // Fetch total sessions
    const { count: sessionsCount, error: sessionsError } = await supabase
      .from("sessions")
      .select("*", { count: "exact", head: true });

    if (sessionsError) {
      console.error("Error fetching sessions count:", sessionsError);
    } else {
      metrics.totalSessions = sessionsCount ?? 0;
    }
  } catch (error) {
    console.error("Error fetching metrics data:", error);
  }

  return metrics;
};
