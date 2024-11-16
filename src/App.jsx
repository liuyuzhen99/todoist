/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Content } from "./components/layouts/Content";
import { Header } from "./components/layouts/Header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
