"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function SplashPage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      position="relative"
      sx={{
        backgroundImage: "url('/images/backgrounds/live_shopping_bkgd.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "text.primary",
        px: 4,
      }}
    >
      {/* Background Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgcolor="rgba(0, 0, 0, 0.6)"
        zIndex={0}
      />
      {/* Content */}
      <Box position="relative" zIndex={1} textAlign="center">
        <Image
          src="/images/branding/logos/livex-logo.svg"
          alt="LiveX Logo"
          width={300}
          height={300}
          style={{ marginBottom: "2rem" }}
        />
        <Typography variant="h2" fontWeight={700} mb={4}>
          Welcome to LiveX
        </Typography>
        <Box>
          <Link href="/auth/login" passHref>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mr: 2 }}
              aria-label="Sign In to LiveX"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/auth/register" passHref>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              aria-label="Register for LiveX"
            >
              Register
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
