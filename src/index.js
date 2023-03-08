import { navbar } from "./navbar";
import { loadPage } from "./loadpage";
import "./style.css";

navbar.activeLink.toggleActive();
loadPage(navbar.activeLink.element);
