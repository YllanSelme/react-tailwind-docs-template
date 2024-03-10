import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Installation from "./docs/Installation/Installation";

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="docs/gettingstarted/installation" element={<Installation />} />
          </Routes>
        </BrowserRouter>
      );
  }
  
  export default App;