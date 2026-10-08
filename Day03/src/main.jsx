import "./index.css";
//import Architect
import { createRoot } from "react-dom/client";
//Finding the root div or land

function Greetings() {
  return <h1>Hello Prathibha, Welcome To reactJs </h1>;
}
function JsxRules() {
  return (
    <div className="card">
      <nav>
        <img
          className="logo"
          src=".\src\assets\react.svg"
          alt="react logo not found "
        />
        <h1 className="heading">Rules of JSX</h1>
      </nav>
      <ul className="ListItems">
        <li>Must enclose within a Parent or Fragment</li>
        <li>Must have a single root element</li>
        <li>Must close all tags</li>
        <li>Must Use curly braces for JavaScript expressions</li>
        <li>Must use camelCase for attribute names</li>
        <li>Must use className instead of class</li>
      </ul>
    </div>
  );
}

//calling component
<Greetings />;
const root = createRoot(document.getElementById("root"));
//rendering  or start building
root.render(
  <div className="card">
    <nav>
      <img
        className="logo"
        src=".\src\assets\react.svg"
        alt="react logo not found "
      />
      <h1 className="heading">Rules of JSX</h1>
    </nav>
    <ul className="ListItems">
      <li>Must enclose within a Parent or Fragment</li>
      <li>Must have a single root element</li>
      <li>Must close all tags</li>
      <li>Must Use curly braces for JavaScript expressions</li>
      <li>Must use camelCase for attribute names</li>
      <li>Must use className instead of class</li>
    </ul>
    //calling component
    <Greetings />
    <JsxRules />
  </div>,
);
