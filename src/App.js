import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { styled } from "@mui/system";
import { Container } from "@mui/material";

export const BackgroundContainer = styled("div")({
  position: "relative",
  width: "100%",
  height: "100%",
  backgroundImage:
    "url('https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/64b0d25449b5b1550d8a607b_Mesh%20gradient%201.webp'),url('https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/64b0d2633fe6ab404eecbffd_Group%202358.webp')",
  backgroundPosition: "100% 0,0 0",
  backgroundSize: "auto,auto",
  backgroundRepeat: "no-repeat",
});

function App() {
  return (
    <BackgroundContainer>
      <Header />
      <Content />
    </BackgroundContainer>
  );
}

export default App;
