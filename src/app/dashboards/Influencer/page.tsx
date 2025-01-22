"use client";

import { Box, Typography, Grid, Button, Card, CardContent, Avatar } from "@mui/material";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";

export default function InfluencerDashboardHome() {
  const router = useRouter();

  return (
    <Box
      sx={{
        padding: { xs: 2, md: 4 },
        backgroundImage: "linear-gradient(to bottom, #272727, #121212)",
        color: "text.primary",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: { xs: 3, md: 4 },
          padding: { xs: 2, md: 3 },
          background: "rgba(39, 39, 39, 0.8)",
          backdropFilter: "blur(10px)",
          borderRadius: "1.5rem",
          boxShadow: "0 4px 15px rgba(188, 154, 45, 0.5)",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            fontFamily="Oswald, sans-serif"
            mb={1}
          >
            Welcome, Influencer
          </Typography>
          <Typography variant="body1" color="muted">
            Here’s your quick overview.
          </Typography>
        </Box>
        <Avatar
          alt="User Avatar"
          src="/images/default-avatar.png"
          sx={{
            width: 60,
            height: 60,
            border: "2px solid #BC9A2D",
            backgroundColor: "secondary",
          }}
        />
      </Box>

      {/* Quick Actions */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundImage: "linear-gradient(to right, #BC9A2D, #d4b344)",
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: "1rem",
              borderRadius: "1rem",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              "&:hover": {
                backgroundImage: "linear-gradient(to right, #d4b344, #BC9A2D)",
              },
            }}
            onClick={() => router.push("/dashboards/influencer/community")}
          >
            Join Our Discord
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              color: "#BC9A2D",
              fontWeight: "bold",
              borderColor: "#BC9A2D",
              fontSize: "1rem",
              borderRadius: "1rem",
              padding: "0.75rem 1.5rem",
              "&:hover": {
                backgroundColor: "#BC9A2D",
                color: "#FFFFFF",
                borderColor: "#BC9A2D",
              },
            }}
            onClick={() =>
              window.open("https://rivx.live/vip-priority-offer/", "_blank")
            }
          >
            Get Exclusive Founder&apos;s Offer
          </Button>
        </Grid>
      </Grid>

      {/* Founder Offer Section */}
      <Card
        sx={{
          boxShadow: "0 4px 15px rgba(188, 154, 45, 0.5)",
          background: "rgba(243, 233, 220, 0.9)",
          backdropFilter: "blur(8px)",
          padding: { xs: 3, md: 4 },
          borderRadius: "2xl",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            fontWeight="bold"
            fontFamily="Oswald, sans-serif"
            mb={2}
          >
            Founder&apos;s Offer: RIVX Certification
          </Typography>
          <Typography variant="body1" color="muted" mb={3}>
            Be part of the first 100 creators to get RIVX certified and gain
            exclusive access to live shopping sessions.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundImage: "linear-gradient(to right, #BC9A2D, #d4b344)",
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: "1rem",
              borderRadius: "1rem",
              "&:hover": {
                backgroundImage: "linear-gradient(to right, #d4b344, #BC9A2D)",
              },
            }}
            onClick={() =>
              window.open("https://rivx.live/vip-priority-offer/", "_blank")
            }
          >
            Get Certified Now
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
