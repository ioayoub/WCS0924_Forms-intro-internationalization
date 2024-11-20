import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { LangProvider } from "./contexts/LangContext";

function App() {
  return (
    <>
      <LangProvider>
        <Navbar />
        <Outlet />
      </LangProvider>
    </>
  );
}

export default App;
