function menuLoad() {
  const menu = document.createElement("div");
  const title = document.createElement("h1");
  const menuPDF = document.createElement("iframe");

  menuPDF.src =
    "https://drive.google.com/file/d/1XhE9ujNiU_zokGgAzZh62ALhs9fot6vY/preview";
  menuPDF.width = "1000px";
  menuPDF.height = "700px";
  menuPDF.frameborder = "0";

  menu.classList.add("menu");
  title.textContent = "Menu";

  menu.appendChild(title);
  menu.appendChild(menuPDF);

  return menu;
}
export { menuLoad };
