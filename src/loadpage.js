import { navbar } from "./navbar";

function loadPage(element) {
  navbar.activeLink.toggleActive();
  for (let link of navbar.links) {
    if (element.textContent == link.text) {
      navbar.activeLink = link;
      navbar.activeLink.toggleActive();
      content.innerHTML = "";
      content.appendChild(navbar.activeLink.pageLoader());
    }
  }
}

export { loadPage };
