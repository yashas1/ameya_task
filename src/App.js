import logo from "./logo.svg";
import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Container from "@mui/material/Container";
import Banner from "./components/Banner";
import OrganizationForm from "./components/OrganizationForm";

let theme = createTheme({
  typography: {
    fontFamily: "Cabin,sans-serif",
  },
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Banner />
        <Container maxWidth="lg">
          <OrganizationForm />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
