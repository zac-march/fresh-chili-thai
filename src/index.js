import { navbar } from "./navbar";
import { loadPage } from "./loadpage";
import "./style.css";

const content = document.querySelector("#content");
navbar.activeLink.toggleActive();
loadPage(navbar.activeLink.element);
