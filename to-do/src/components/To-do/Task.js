import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import * as React from "react";

export default function Task() {
  return (
    <Box component={"div"}>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label='Content of this task'
        />
      </FormGroup>
    </Box>
  );
}
