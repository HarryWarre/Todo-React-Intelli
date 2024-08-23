import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CardBasics from "./Card";
import { Box, Grid } from "@mui/material";
import CardParameter from "./CardShowParameter";

export default function ListCard() {
  return (
    <Box display={"section"} sx={{ margin: 3 }}>
      <Grid container spacing={1}>
        {/* List card default */}
        <Grid item xs={6} md={4}>
          <CardBasics />
        </Grid>
        <Grid item xs={6} md={4}>
          <CardBasics />
        </Grid>
        <Grid item xs={6} md={4}>
          <CardBasics />
        </Grid>

        {/* Card parameter */}
        <Grid item xs={12} md={6} justifyContent={"center"}>
          <CardParameter />
        </Grid>
        <Grid item xs={12} md={6} justifyContent={"center"}>
          <CardParameter />
        </Grid>
      </Grid>
    </Box>
  );
}
