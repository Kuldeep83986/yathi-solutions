import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import DisplayFood from "../components/DisplayFood";
import AddFood from "../components/AddFood";

function App() {
  return (
    <>
      <AddFood />
      <DisplayFood />
    </>
  );
}

export default App;
