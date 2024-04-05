import React from "react";
import ReactDOM from "react-dom/client";
// import { HooksApp } from './HooksApp';
// import { FormWhitCustomHook } from './02-useEffect/FormWhitCustomHooks';
import "./index.css";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { Focusscreen } from "./04-useRef/Focusscreen";

// import { SimpleForm } from './02-useEffect/SimpleForm';

// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { CounterApp } from './01-useState/CounterApp';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FormWhitCustomHook /> */}
    <Focusscreen />
  </React.StrictMode>
);
