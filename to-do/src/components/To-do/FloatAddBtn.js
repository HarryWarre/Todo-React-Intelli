import { Fab } from "@mui/material";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
export default function FloatAddBtn() {
  const floatBtnStyle = {
    position: "absolute",
    bottom: 64,
    right: 64,
  };
  return (
    <Fab sx={floatBtnStyle} color='primary' aria-label='Add' variant='extended'>
      <AddIcon />
      Add Task
    </Fab>
  );
}
