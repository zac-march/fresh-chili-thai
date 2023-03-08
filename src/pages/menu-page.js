function menuLoad() {
  const menu = document.createElement("div");
  const title = document.createElement("h1");
  const menuPDF = document.createElement("iframe");
  const content = document.querySelector("#content");

  menuPDF.src =
    "https://drive.google.com/file/d/1XhE9ujNiU_zokGgAzZh62ALhs9fot6vY/preview";
  menuPDF.frameborder = "0";

  menu.classList.add("iframe-wrapper");
  title.textContent = "Menu";

  content.appendChild(title);
  menu.appendChild(menuPDF);

  return menu;
}
export { menuLoad };
