"use client"; // Mark this as a Client Component

import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  SxProps,
  Theme,
  useTheme,
} from "@mui/material";

type Props = {
  className?: string;
  children: React.ReactNode;
  title?: string;
  action?: React.ReactNode;
  sx?: SxProps<Theme>;
  variant?: "elevation" | "outlined";
  elevation?: number;
};

const BlankCard = ({
  children,
  className,
  title,
  action,
  sx = {},
  variant = "elevation",
  elevation = 9,
}: Props) => {
  const theme = useTheme(); // Access the Material-UI theme dynamically

  return (
    <Card
      sx={{
        p: 0,
        position: "relative",
        ...sx,
      }}
      className={className}
      elevation={variant === "elevation" ? elevation : undefined}
      variant={variant}
    >
      {title && (
        <CardHeader
          title={title}
          action={action}
          sx={{
            px: 2,
            py: 1,
            borderBottom:
              variant === "outlined"
                ? `1px solid ${theme.palette.divider}`
                : "none",
          }}
        />
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default BlankCard;
