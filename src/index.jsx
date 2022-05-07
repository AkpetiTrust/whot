import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PlayComputer, Home, CopyLink } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/play-computer" exact element={<PlayComputer />} />
        <Route path="/copylink" exact element={<CopyLink />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
