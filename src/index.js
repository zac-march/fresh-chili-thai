import { navbar } from "./navbar";
import { loadPage } from "./page-loader";
import "./style.css";

const content = document.querySelector("#content");
navbar.activeLink.toggleActive();
loadPage(navbar.activeLink.element);
