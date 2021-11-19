import "./App.scss";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/homePage/homePage";
import Crypto from "./pages/cryptoPage/cryptoPage";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </Router>
  );
}

export default App;
