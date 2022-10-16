import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import Venues from "./Venues";
import Dashboard from "./Dashboard";
import ErrorPage from "./ErrorPage";
import About from "./About";
import VenueSinglePage from "./VenueSinglePage";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/venues" element={<Venues />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            

            <Route path="/venues/:id" element={<VenueSinglePage />} />

            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;