import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Installation from "./docs/Installation/Installation";

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="react-tailwind-docs-template/docs/gettingstarted/installation" element={<Installation />} />
            <Route path="react-tailwind-docs-template" element={<Home />} />
          </Routes>
        </BrowserRouter>
      );
  }
  
  export default App;