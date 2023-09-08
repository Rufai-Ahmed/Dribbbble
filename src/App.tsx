import React from "react";
import "./App.css";
import styled from "styled-components";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./MainRouter/MainRouter";


function App() {
  return (
    <div>
      <RouterProvider router={MainRouter} />
    </div>
  );
}

export default App;

