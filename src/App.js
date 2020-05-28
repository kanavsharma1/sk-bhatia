import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "./components/app-contaner/AppContainer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
