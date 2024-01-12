import Router from "./Router";
import { styled, createGlobalStyle } from "styled-components";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Router />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;
export default App;
