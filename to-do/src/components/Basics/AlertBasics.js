import * as React from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { Box } from "@mui/material";

export default function SimpleAlert() {
  return (
    <Box component={"div"} margin={1}>
      <Alert icon={<CheckIcon fontSize='inherit' />} severity='success'>
        You're agree this dialog
      </Alert>
    </Box>
  );
}
