import { Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import Airdrop from "./Views/Airdrop";
import Token from "./Views/Token";
import "./index.css";
import Ecosystem from "./Views/Ecosystem";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Loader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Airdrop />} />
        <Route path="/tokenomics" element={<Token />} />
        <Route path="/roadmap" element={<Ecosystem />} />
        <Route path="/terms" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
