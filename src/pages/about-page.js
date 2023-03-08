import Image from "../images/thaivibe.jpg";

function aboutLoad() {
  const body = document.querySelector("body");
  // body.style.backgroundImage = "";
  const container = document.createElement("div");
  const textContainer = document.createElement("div");
  const imageContainer = document.createElement("div");
  const title = document.createElement("h1");
  const blurb = document.createElement("p");
  const image = document.createElement("img");

  container.classList.add("about");
  imageContainer.classList.add("about-image");
  textContainer.classList.add("about-text");

  title.textContent = "About us";
  blurb.textContent =
    "Welcome to Fresh Chilli Thai! We are a family-owned restaurant dedicated to serving authentic Thai cuisine with a modern twist. Our chefs use only the freshest ingredients to create bold and vibrant flavors that will transport you to the streets of Thailand. From classic favorites like Pad Thai and Green Curry to our signature dishes like Chilli Basil Seafood and Mango Sticky Rice, we offer a variety of dishes to satisfy all taste buds. Our cozy and inviting atmosphere paired with our friendly staff will make you feel right at home. Come and experience the flavors of Thailand at Fresh Chilli Thai!";
  image.src = Image;

  textContainer.appendChild(title);
  textContainer.appendChild(blurb);
  imageContainer.append(image);

  container.append(textContainer);
  container.append(imageContainer);

  return container;
}
export { aboutLoad };
