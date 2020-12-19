import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Feeds from "./Feeds";
import Widgets from "./Widgets";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feeds />
      <Widgets />
    </div>
  );
}

export default App;
