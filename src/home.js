function home() {
  const content = document.querySelector(".content");
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to @Some Restaurant";
  const subHeading = document.createElement("h3");
  subHeading.textContent = "Experience the best dining in town!";
  const paragraph = document.createElement("p");
  paragraph.textContent = "Some generic line about this restaurant.";

  content.appendChild(heading);
  content.appendChild(subHeading);
  content.appendChild(paragraph);
}


export const homePage = home();