function aboutLoad() {
  const container = document.createElement("div");
  const title = document.createElement("h1");
  const blurb = document.createElement("p");

  container.classList.add("about");

  title.textContent = "About us";
  blurb.textContent =
    "Fresh chilli Thai restaurant is located at 1/1-5 Aviation street Laverton Victoria and surrounded by the busy metropolis of Laver- ton shopping center. Fresh chilli has the style and warmth that makes it perfect for any occasions of evening with friends or just the £wo of you. We provide indoor dining and a bar for pre-dinner drinks. Enjoy the modem ‘Thai atmosphere and relaxing view of a small town through the huge 3m height glassed walls while we are serving our best customers very authentic Thai dishes. Our friendly ser- vice is now available 7days from Spm for takeaway and 5:30pm for dine in.";

  container.appendChild(title);
  container.appendChild(blurb);

  return container;
}
export { aboutLoad };
