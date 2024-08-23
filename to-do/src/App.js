import React from "react";
import TabsBasic from "./components/Basics/Tabs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue, green, orange } from "@mui/material/colors";
import FloatAddBtn from "./components/To-do/FloatAddBtn";
import { Box } from "@mui/material";
import ListTask from "./components/To-do/ListTask";
const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box component={"section"} sx={{ width: 1000 }}>
        <TabsBasic />
        {/* <ListTask /> */}
        {/* <FloatAddBtn /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
