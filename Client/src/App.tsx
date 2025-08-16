import "./App.css";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import { useState } from "react";
import { LoadingScreen } from "./lib/loadingScreen";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    // Only show loading screen, don't mount anything else yet
    return <LoadingScreen onComplete={() => setIsLoaded(true)} />;
  }

  // Once loaded, render your actual app
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
