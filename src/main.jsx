import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Navbar } from "./components/components.js";

const Main = () => {
  return (
    <BrowserRouter>
      <StrictMode>
        <div className="px-4 h-[70px] flex items-center justify-center w-full fixed bg-white border-b border-neutral-200 z-50 shadow-xs">
          <div className={"w-full lg:w-[1000px]"}><Navbar  /></div>
          
        </div>
        <App />
      </StrictMode>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(<Main />);
