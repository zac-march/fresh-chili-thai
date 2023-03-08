import { homeLoad } from "./pages/home-page";
import { menuLoad } from "./pages/menu-page";
import { aboutLoad } from "./pages/about-page";
import { contactLoad } from "./pages/contact-page";
import { loadPage } from "./loadpage";

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

const navbar = {
  links: [homeLink, menuLink, aboutLink, contactLink],
  activeLink: homeLink,
  setLinkElements: function () {
    for (let i = 0; i < this.links.length; i++) {
      navbar.links[i].setElement(navLinkNodes[i]);
      navLinkNodes[i].addEventListener("click", (e) => {
        loadPage(e.target);
      });
    }
  },
};

navbar.setLinkElements();

export { navbar };
