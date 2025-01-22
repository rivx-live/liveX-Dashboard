"use client";

import { Box, Typography, Card, CardContent, Button, Grid } from "@mui/material";

export default function RIVXScorePage() {
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
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={{ xs: 2, md: 3 }}
        fontSize={{ xs: "1.5rem", md: "2rem" }}
      >
        RIVX Score Overview
      </Typography>
      <Typography
        variant="body1"
        mb={{ xs: 3, md: 4 }}
        fontSize={{ xs: "0.875rem", md: "1rem" }}
      >
        Learn about your RIVX Score, how it’s calculated, and how to improve it. Complete the form below to calculate or update your score.
      </Typography>

      {/* Explanation Section */}
      <Card
        sx={{
          boxShadow: 3,
          backgroundColor: "background.paper",
          padding: { xs: 2, md: 3 },
          mb: { xs: 3, md: 4 },
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            fontWeight="bold"
            mb={{ xs: 2, md: 3 }}
            fontSize={{ xs: "1.25rem", md: "1.5rem" }}
          >
            Minimum Qualifications for RIVX Score
          </Typography>
          <Typography
            variant="body1"
            mb={{ xs: 2, md: 3 }}
            fontSize={{ xs: "0.875rem", md: "1rem" }}
          >
            - A minimum of 10,000 followers on any social media platform.<br />
            - Engagement rates above 2% on your content.<br />
            - At least 5 active posts in the last 30 days.
          </Typography>
        </CardContent>
      </Card>

      {/* Form Section */}
      <Card
        sx={{
          boxShadow: 3,
          backgroundColor: "background.paper",
          padding: { xs: 2, md: 3 },
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            fontWeight="bold"
            mb={{ xs: 2, md: 3 }}
            fontSize={{ xs: "1.25rem", md: "1.5rem" }}
          >
            Calculate or Update Your RIVX Score
          </Typography>
          <form>
            <Grid container spacing={3} mb={{ xs: 2, md: 3 }}>
              {/* Followers */}
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" mb={1}>
                  Number of Followers
                </Typography>
                <input
                  type="number"
                  placeholder="Enter your follower count"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </Grid>
              {/* Engagement Rate */}
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" mb={1}>
                  Engagement Rate (%)
                </Typography>
                <input
                  type="number"
                  step="0.01"
                  placeholder="Enter your engagement rate"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{
                fontSize: { xs: "0.875rem", md: "1rem" },
                padding: { xs: "0.5rem 1rem", md: "0.75rem 1.5rem" },
              }}
            >
              Calculate RIVX Score
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
