import {menuPage} from "./menu.js";
import {contactPage} from "./contact.js";
import {homePage} from "./home.js";

function initialPage() {

  homePage.load();

}

  function enableMenuBtn() {

  const menuButton = document.querySelector(".nav-bar").children[1];
  menuButton.addEventListener("click", ()=> {
    removeAllChildNodes();
    menuPage.load();
  });
}
function enableContactBtn() {
  const contactButton = document.querySelector(".nav-bar").children[2];
  contactButton.addEventListener("click", ()=> {
    removeAllChildNodes();
    contactPage.load();
  });
}

function enableHomeBtn() {
  const homeButton = document.querySelector(".nav-bar").children[0];
  homeButton.addEventListener("click", ()=> {
    removeAllChildNodes();
    initialPage();
  });
}

  

  function removeAllChildNodes() {
  const contentDiv = document.querySelector(".content");
  while (contentDiv.hasChildNodes()) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
}

function activeBtn() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
  button.addEventListener('click', () => {

    // Remove active class from all buttons
    buttons.forEach(btn => {
      btn.classList.remove('active');
    });

    // Add active class to clicked button
    button.classList.add('active');
  });
});
}

  
  








export { initialPage, enableHomeBtn, enableMenuBtn, enableContactBtn, activeBtn };