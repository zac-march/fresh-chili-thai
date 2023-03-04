import { homeLoad } from "./home-load";
import { menuLoad } from "./menu-load";
import { aboutLoad } from "./about-load";

const content = document.querySelector("#content");
content.appendChild(aboutLoad());
