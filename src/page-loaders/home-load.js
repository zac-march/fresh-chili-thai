import Image from "../images/thaifood.jpg";
import { menuLoad } from "./menu-load";

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

  hero.classList.add("hero");
  hero.appendChild(title);
  hero.appendChild(blurb);
  hero.append(callToActionBtn);

  callToActionBtn.addEventListener("click", (e) => {});

  return hero;
}
export { homeLoad };
