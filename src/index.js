import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { StateProvider } from "../src/context/StateProvider";
import reducer, { initialState } from "../src/context/AppReducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
