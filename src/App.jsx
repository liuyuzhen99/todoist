/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Content } from "./components/layouts/Content";
import { Header } from "./components/layouts/Header";
import { ProjectsProvider, SelectedProjectProvider } from "./context";
import "./App.scss";

function App() {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;
