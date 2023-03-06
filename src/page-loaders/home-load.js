function homeLoad() {
  const hero = document.createElement("div");
  const title = document.createElement("h1");
  const blurb = document.createElement("p");

  title.textContent = "FRESH CHILLI THAI";
  blurb.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus ligula sodales lacus interdum, sit amet fermentum tellus finibus. Duis.";

  hero.classList.add("hero");
  hero.appendChild(title);
  hero.appendChild(blurb);

  return hero;
}
export { homeLoad };
