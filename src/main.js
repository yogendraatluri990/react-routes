import { StrictMode } from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Importing local components
import Nav from "./routes/headers/nav";
import CustomRoutes from "./routes/custom-routes";

const rootElement = document.getElementById("root");

ReactDom.render(
  <StrictMode>
    <Router>
      <Nav />      
       <CustomRoutes />      
    </Router>
  </StrictMode>,
  rootElement
);
