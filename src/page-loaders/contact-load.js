function contactLoad() {
  const container = document.createElement("div");
  const title = document.createElement("h1");
  const detailsContainer = document.createElement("div");

  const details = [
    { title: "Phone", text: "(03) 9369 3796" },
    { title: "Address", text: "1/1-5 Aviation Rd, Laverton VIC 3028" },
  ];
  for (let detail of details) {
    const title = document.createElement("h2");
    const text = document.createElement("p");

    title.textContent = detail.title;
    text.textContent = detail.text;

    detailsContainer.appendChild(title);
    detailsContainer.appendChild(text);
  }

  container.classList.add("contact");

  title.textContent = "Contact us";
  container.appendChild(title);
  container.appendChild(detailsContainer);

  return container;
}
export { contactLoad };
