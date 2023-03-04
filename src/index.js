import { homeLoad } from "./home-load.js";
import { menuLoad } from "./menu-load";

const content = document.querySelector("#content");
content.appendChild(menuLoad());
