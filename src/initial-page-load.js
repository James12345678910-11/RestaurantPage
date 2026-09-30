import menu from "./menu.js";

function initialPage() {
  const nav = document.querySelector("nav");
  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", initialPage);

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", loadMenu);

  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", loadContact);

  const content = document.querySelector(".content");
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to @Some Restaurant";
  const backgroundImage = document.createElement("img");
  backgroundImage.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const subHeading = document.createElement("h3");
  subHeading.textContent = "Experience the best dining in town!";
  const paragraph = document.createElement("p");
  paragraph.textContent = "Some generic line about this restaurant.";


  
  content.appendChild(heading);
  content.appendChild(backgroundImage);
  content.appendChild(subHeading);
  content.appendChild(paragraph);

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

}

export default initialPage;