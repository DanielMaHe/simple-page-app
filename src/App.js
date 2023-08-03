import { BrowserRouter } from "react-router-dom";
import NavbarLink from "./Components/navbarLink";
import { AuthProvider } from "./Context/authContext";
import SPA from "./SPA/SPA";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavbarLink />
        <SPA />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
