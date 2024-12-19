import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//import "./node_modules/bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/advanceD-Routing">
    <App />
    </BrowserRouter>
);