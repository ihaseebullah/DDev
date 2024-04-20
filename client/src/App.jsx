import { useState } from "react";
import axios from "axios";
import "./App.css";
import MainComponent from "./components/MainComponent";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  axios.defaults.withCredentials = true;
  return (
    <>
      <MainComponent />
    </>
  );
}

export default App;
