import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import * as React from "react";

export default function CardParameter() {
  return (
    <Card sx={{ border: 1 }} elevation={0}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }}>Water Flow</Typography>
        <Divider />
        <Grid container spacing={0} sx={{ flexGrow: 1, my: 1 }}>
          <Grid item xs={4} sx={{ padding: 0 }}>
            <Typography sx={{ fontSize: 14 }}>Flow Rate</Typography>
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              3415 m3/s
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ padding: 0 }}>
            <Typography sx={{ fontSize: 14 }}>Flow Velocity</Typography>
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              200 m/s
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ padding: 0 }}>
            <Typography sx={{ fontSize: 14 }}>Depth</Typography>
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              30m
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
