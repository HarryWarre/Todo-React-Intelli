import React from "react";
import TabsBasic from "./components/Basics/Tabs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TabsBasic />
    </ThemeProvider>
  );
}

export default App;
