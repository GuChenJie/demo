import _ from "lodash";
import printMe from "./print.js";
import { log } from "./test.js";
function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.appendChild(btn);
  log("index");
  return element;
}

document.body.appendChild(component());
