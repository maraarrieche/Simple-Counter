//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { SecondsCounter } from "./component/SecondsCounter.jsx";
import { ClockIcon } from "./component/SecondsCounter.jsx";

//render your react applicatio
let counter = 0

setInterval(() => {
    ReactDOM.render(<SecondsCounter timer={counter}/>, document.querySelector("#app"));
    counter += 1
} ,1000)
