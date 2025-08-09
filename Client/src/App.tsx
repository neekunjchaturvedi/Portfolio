import "./App.css";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
