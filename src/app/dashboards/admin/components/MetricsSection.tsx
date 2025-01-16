"use client";

import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { fetchMetricsData } from "../../../../utils/fetchMetricsData"; // Ensure correct path

type Metrics = {
  totalInfluencers: number;
  averageRIVXScore: number;
  totalSessions: number;
};

const MetricsSection: React.FC = () => {
  const [metrics, setMetrics] = useState<Metrics>({
    totalInfluencers: 0,
    averageRIVXScore: 0,
    totalSessions: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMetricsData();
        setMetrics(data);
      } catch (error) {
        console.error("Error fetching metrics data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={3}>
      {/* Total Influencers */}
      <Grid item xs={12} sm={4}>
        <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            Total Influencers
          </Typography>
          <Typography variant="h4" color="primary">
            {metrics.totalInfluencers}
          </Typography>
        </Paper>
      </Grid>

      {/* Average RIVX Score */}
      <Grid item xs={12} sm={4}>
        <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            Average RIVX Score
          </Typography>
          <Typography variant="h4" color="primary">
            {metrics.averageRIVXScore}
          </Typography>
        </Paper>
      </Grid>

      {/* Total Sessions */}
      <Grid item xs={12} sm={4}>
        <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            Total Sessions
          </Typography>
          <Typography variant="h4" color="primary">
            {metrics.totalSessions}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MetricsSection;
