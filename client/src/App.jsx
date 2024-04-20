import { useState } from "react";
import axios from "axios";
import "./App.css";
import MainComponent from "./components/MainComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  axios.defaults.withCredentials = true;
  return (
    <>
    <Header />
      <MainComponent />
      <Footer />
    </>
  );
}

export default App;
