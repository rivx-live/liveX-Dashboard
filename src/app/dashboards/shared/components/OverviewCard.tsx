import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const OverviewCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <Card sx={{ padding: 2, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4" color="primary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
