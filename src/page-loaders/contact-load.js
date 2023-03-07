function contactLoad() {
  const container = document.createElement("div");
  const title = document.createElement("h1");
  const detailsContainer = document.createElement("div");
  const mapContainer = document.createElement("div");
  const map = document.createElement("iframe");

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
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.6965654218247!2d144.7597769511881!3d-37.86738974478788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad689b7ca514c95%3A0x9915d95f30dfa4fb!2sFresh%20Chilli%20Thai%20Restaurant!5e0!3m2!1sen!2sau!4v1678176261240!5m2!1sen!2sau";

  mapContainer.append(map);
  mapContainer.classList.add("iframe-wrapper");
  container.classList.add("contact");

  title.textContent = "Contact us";
  container.appendChild(title);
  container.appendChild(detailsContainer);
  container.append(mapContainer);

  return container;
}
export { contactLoad };
