import Image from "../images/thaifood.jpg";
import { menuLoad } from "./menu-page";
import { loadPage } from "../loadpage";

function homeLoad() {
  const hero = document.createElement("div");
  const title = document.createElement("h1");
  const blurb = document.createElement("p");
  const callToActionBtn = document.createElement("button");
  const body = document.querySelector("body");

  body.style.backgroundImage = `url(${Image})`;
  title.textContent = "FRESH CHILLI THAI";
  blurb.textContent =
    "Where every dish is an explosion of authentic Thai flavors, crafted from the freshest ingredients to tantalize your taste buds.";
  callToActionBtn.textContent = "View Menu";

  callToActionBtn.addEventListener("click", (e) => {
    loadPage(menuLoad());
  });

  hero.classList.add("hero");
  hero.appendChild(title);
  hero.appendChild(blurb);
  hero.append(callToActionBtn);

  return hero;
}
export { homeLoad };
