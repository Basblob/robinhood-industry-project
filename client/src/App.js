import "./App.scss";
import { React, Route, Routes, BrowserRouter as Router } from "react";
import Home from "./pages/homePage";
import Crypto from "./pages/cryptoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </Router>
  );
}

export default App;
