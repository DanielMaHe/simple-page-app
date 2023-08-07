import { BrowserRouter } from "react-router-dom";
import NavbarLink from "./Components/navbarLink";
import { AuthProvider } from "./Context/authContext";
import SPA from "./SPA/SPA";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding-top: 10px;

`;

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavbarLink />
        <Container>
          <SPA />
        </Container>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
