export const calculateRIVXScore = (influencer: any) => {
  const { likes, comments, followers, engagement_rate } = influencer;
  const weightedEngagement = (comments * 0.5 + likes * 0.2) / followers;
  const baselineScore = weightedEngagement * engagement_rate * 100;

  // Clamp score between 25 and 100
  return Math.min(Math.max(baselineScore, 25), 100);
};

export const determineTier = (score: number, followers: number) => {
  if (followers < 10000) return null;
  if (followers < 100000 && score >= 67) return "Silver";
  if (followers < 500000 && score >= 65) return "Gold";
  if (followers < 1000000 && score >= 62) return "Platinum";
  if (followers < 5000000 && score >= 60) return "Diamond";
  if (followers < 10000000 && score >= 58) return "Master";
  if (followers < 50000000 && score >= 54) return "Grandmaster";
  if (score >= 50) return "Legendary";
  return null;
};
