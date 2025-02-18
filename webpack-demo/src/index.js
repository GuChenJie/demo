import _ from "lodash";
import "./style.css";
import Img from "./image.png";
import data from "./data.xml";
import notes from "./data.csv";
function component() {
  const element = document.createElement("div");

  // 执行这一行需要引入 lodash（目前通过 script 脚本引入）
  element.innerHTML = _.join(["Hello", "大撒大撒大撒大撒"], " ");

  element.classList.add("hello");

  const img = new Image();
  img.src = Img;
  element.appendChild(img);
  console.log(data);
  console.log(notes);

  return element;
}

document.body.appendChild(component());
