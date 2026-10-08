import "./index.css";
//import Architect
import { createRoot } from "react-dom/client";
//Finding the root div or land
let name = "Prathibha";
const d = new Date();
const root = createRoot(document.getElementById("root"));
//rendering  or start building
root.render(
  <div>
    <h1>Welcome to React Js </h1>
    <h1>My name is {name}</h1>
    <h2>Hola React </h2>
    <h3>2+2 = {2 + 2}</h3>
    <h1>today is {d.getDate()}</h1>
    <h4>{name.toUpperCase()}</h4>
    <p>
      React (also known as React.js or ReactJS) is an open-source JavaScript
      library used for building fast, scalable, and interactive user interfaces
      (UIs). Developed by Meta (formerly Facebook) in 2013, it has become one of
      the most widely adopted front-end technologies for developing single-page
      web applications (SPAs) and cross-platform mobile apps
    </p>
  </div>,
);
