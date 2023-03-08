function menuLoad() {
  const menuContainer = document.createElement("div");
  const title = document.createElement("h1");
  const menuIframe = document.createElement("iframe");
  const content = document.querySelector("#content");

  menuIframe.src =
    "https://drive.google.com/file/d/1XhE9ujNiU_zokGgAzZh62ALhs9fot6vY/preview";
  menuIframe.frameborder = "0";

  menuContainer.classList.add("iframe-wrapper");
  title.textContent = "Menu";

  content.appendChild(title);
  menuContainer.appendChild(menuIframe);

  return menuContainer;
}
export { menuLoad };
