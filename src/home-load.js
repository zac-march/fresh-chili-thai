function homeLoad() {
  const hero = document.createElement("div");
  hero.classList.add("hero");

  const title = document.createElement("h1");
  title.textContent = "FRESH CHILLI THAI";
  hero.appendChild(title);

  const blurb = document.createElement("p");
  blurb.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus ligula sodales lacus interdum, sit amet fermentum tellus finibus. Duis.";
  hero.appendChild(blurb);

  return hero;
}
export { homeLoad };
