import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CardBasics from "./Basics/Card";

export default function ListCard() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>
        <CardBasics />
      </ListItem>

      <ListItem>
        <CardBasics />
      </ListItem>

      <ListItem>
        <CardBasics />
      </ListItem>
    </List>
  );
}
