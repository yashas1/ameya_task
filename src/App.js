import "./App.css";
import "./style.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Container from "@mui/material/Container";
import Banner from "./components/Banner";
import OrganizationForm from "./components/OrganizationForm";
import ContactForm from "./components/ContactForm";
import OrganizationStructure from "./components/OrganizationStructure";
import FeaturesComponent from "./components/FeaturesComponent";
import ButtonComponent from "./components/subComponents/ButtonComponent";
import SideBar from "./components/SideBar";
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
        <SideBar />
        <Header />
        <Banner />
        <Container maxWidth="md">
          <OrganizationForm />
          <ContactForm />
          <OrganizationStructure />
          <FeaturesComponent />
          <ButtonComponent />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
