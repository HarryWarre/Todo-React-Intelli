import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

export default function BasicsTooltips() {
  return (
    <Box sx={{ width: 500 }}>
      <h1>Box</h1>
      <Grid container justifyContent={"center"}>
        <Tooltip title='Add' placement='bottom-end' arrow>
          <Button>Bottom end button</Button>
        </Tooltip>
      </Grid>
    </Box>
  );
}
