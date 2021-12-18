import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </StrictMode>,
  rootElement
);
