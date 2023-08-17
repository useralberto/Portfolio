import { AppProvider } from "./context/AppContext";
import { useEffect } from "react";
import BodyApp from "./partials/BodyApp/BodyApp";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);
  return (
    <AppProvider>
      <BodyApp />
    </AppProvider>
  );
}

export default App;
