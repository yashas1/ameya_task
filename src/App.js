import logo from "./logo.svg";
import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Container from "@mui/material/Container";
import Banner from "./components/Banner";
import OrganizationForm from "./components/OrganizationForm";
import ContactForm from "./components/ContactForm";
import OrganizationStructure from "./components/OrganizationStructure";
let theme = createTheme({
  typography: {
    fontFamily: "Cabin,sans-serif",
  },
  textFieldBorder: {
    border: "1px solid blue",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Banner />
        <Container maxWidth="md">
          <OrganizationForm />
          <ContactForm />
          <OrganizationStructure />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
