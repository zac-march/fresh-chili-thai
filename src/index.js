import { navbar } from "./navbar";
import { loadPage } from "./loadpage";
import Logo from "./images/logo.jpeg";
import "./style.css";

const logo = document.querySelector("#logo");
logo.src = Logo;

navbar.activeLink.toggleActive();
loadPage(navbar.activeLink.element);
