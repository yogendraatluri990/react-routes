import { StrictMode } from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing local components
import Nav from "./routes/headers/nav";
import App from "./routes/app";
import Welcome from "./routes/components/welcome";
import Invoices from "./routes/components/invoices";

const rootElement = document.getElementById("root");

ReactDom.render(
  <StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="invoices" element={<Invoices />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
  rootElement
);
