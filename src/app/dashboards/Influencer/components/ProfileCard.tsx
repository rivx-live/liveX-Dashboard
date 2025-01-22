import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

export default function ProfileCard() {
  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: "auto",
        textAlign: "center",
        padding: "1.5rem",
        borderRadius: "16px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        backgroundColor: "background.default",
      }}
    >
      <Box
        sx={{
          width: 100,
          height: 100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          border: "3px solid var(--primary-color)",
          boxShadow: "0 4px 15px rgba(188, 154, 45, 0.5)",
        }}
      >
        <Avatar
          src="/images/traveler.png"
          alt="Profile"
          sx={{
            width: 90,
            height: 90,
          }}
        />
      </Box>
      <CardContent>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ marginTop: "1rem", color: "text.primary" }}
        >
          Traveler
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "0.5rem" }}>
          Explore new destinations with ease.
        </Typography>
      </CardContent>
    </Card>
  );
}
