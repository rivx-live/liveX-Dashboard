"use client";

import { Box, Typography, Button, Card, CardContent } from "@mui/material";

export default function MarketplacePage() {
  return (
    <Box
      sx={{
        textAlign: "center",
        maxWidth: 600,
        margin: "0 auto",
        padding: { xs: 2, sm: 4 },
      }}
    >
      <Card
        sx={{
          backgroundColor: "background.paper",
          boxShadow: 3,
          padding: { xs: 2, sm: 3 },
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            fontWeight="bold"
            color="text.primary"
            mb={2}
          >
            Marketplace Under Construction
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            mb={3}
          >
            We&apos;re working hard to bring you the ultimate live shopping experience. In the meantime, why not get certified as a RIVX Live Shopping Host?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ textTransform: "none" }}
            onClick={() =>
              window.open("https://rivx.live/vip-priority-offer/", "_blank")
            }
          >
            Get RIVX Certified Now
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
