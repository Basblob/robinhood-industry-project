import "./App.scss";
import { React } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Crypto from "./pages/cryptoPage/cryptoPage";

function App() {
  return (
    <article>
      <Router>
        <Routes>
          <Route exact path="/" element={<Crypto />} />
        </Routes>
      </Router>
    </article>
  );
}

export default App;
