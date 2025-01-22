"use client";

import { Box, Typography, Card, CardContent, Grid, Button } from "@mui/material";

export default function InfluencerSessionsPage() {
  return (
    <Box
      sx={{
        padding: { xs: 2, md: 4 },
        backgroundColor: "background.default",
        color: "text.primary",
        minHeight: "100vh",
      }}
    >
      {/* Page Header */}
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Your Live Shopping Sessions
      </Typography>

      {/* Upcoming Sessions */}
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Upcoming Sessions
      </Typography>
      <Grid container spacing={3} mb={4}>
        {/* Sample Session Card */}
        {[1, 2].map((session) => (
          <Grid item xs={12} sm={6} md={4} key={session}>
            <Card
              sx={{
                boxShadow: 3,
                backgroundColor: "background.paper",
                textAlign: "center",
                padding: { xs: 2, md: 3 },
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  Session Title #{session}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Scheduled for: Jan 20, 2025, 4:00 PM
                </Typography>
                <Button variant="contained" color="primary" size="small">
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Past Sessions */}
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Past Sessions
      </Typography>
      <Grid container spacing={3}>
        {/* Sample Session Card */}
        {[1, 2, 3].map((session) => (
          <Grid item xs={12} sm={6} md={4} key={session}>
            <Card
              sx={{
                boxShadow: 3,
                backgroundColor: "background.paper",
                textAlign: "center",
                padding: { xs: 2, md: 3 },
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  Session Title #{session}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Completed on: Jan 15, 2025, 2:00 PM
                </Typography>
                <Button variant="outlined" color="primary" size="small">
                  View Report
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
