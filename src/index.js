import { homeLoad } from "./page-loaders/home-load";
import { menuLoad } from "./page-loaders/menu-load";
import { aboutLoad } from "./page-loaders/about-load";
import { contactLoad } from "./page-loaders/contact-load";
import "./style.css";

const content = document.querySelector("#content");
const navLinkNodes = document.querySelectorAll(".nav-link");

class NavLink {
  constructor(text, pageLoader, isActive, element) {
    this.text = text;
    this.pageLoader = pageLoader;
    this.isActive = isActive;
    this.element = element;
  }
  toggleActive() {
    if (this.isActive) {
      this.element.classList.remove("active");
      this.isActive = false;
    } else {
      this.element.classList.add("active");
      this.isActive = true;
    }
  }
  setElement(e) {
    this.element = e;
  }
}

const homeLink = new NavLink("Home", homeLoad, false);
const menuLink = new NavLink("Menu", menuLoad, false);
const aboutLink = new NavLink("About", aboutLoad, false);
const contactLink = new NavLink("Contact", contactLoad, false);

const navLinks = [homeLink, menuLink, aboutLink, contactLink];

let currentPage = homeLink;

for (let i = 0; i < navLinks.length; i++) {
  navLinkNodes[i].addEventListener("click", (e) => {
    updatePage(e);
  });

  if (navLinkNodes[i].textContent == navLinks[i].text) {
    navLinks[i].setElement(navLinkNodes[i]);
  }
}

currentPage.toggleActive();

function updatePage(event) {
  currentPage.toggleActive();
  for (let link of navLinks) {
    if (event.target.textContent == link.text) {
      currentPage = link;
      currentPage.toggleActive();
      content.innerHTML = "";
      content.appendChild(currentPage.pageLoader());
    }
  }
}

content.appendChild(homeLink.pageLoader());
