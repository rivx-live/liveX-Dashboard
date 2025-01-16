import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

type TierData = {
  tier: string;
  influencerCount: number;
  averageRIVXScore: number;
};

const RIVXTierTable = ({ data }: { data: TierData[] }) => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Typography variant="h6" sx={{ padding: 2 }}>
        RIVX Tier Breakdown
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Tier</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Influencers Count</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Average RIVX Score</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.tier}>
              <TableCell>{row.tier}</TableCell>
              <TableCell align="center">{row.influencerCount}</TableCell>
              <TableCell align="center">{row.averageRIVXScore}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RIVXTierTable;
