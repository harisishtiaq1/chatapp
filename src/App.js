import SideBar from "./Components/SideBar";
import {ThemeProvider} from "@mui/material"
import Register from "./Components/Register"
import Login from "./Components/Login"

import { createTheme } from "@mui/material";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
      fontWeightBold: "600",
    },
    backgroundColor: "#F4F7FE",
  });
  return(
<ThemeProvider theme={theme}>
    {/* <SideBar/> */}
    <Register/>
    {/* <Login/> */}
</ThemeProvider>
    ) 
}

export default App;
