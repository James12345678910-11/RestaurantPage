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

  
  








export { initialPage, enableHomeBtn, enableMenuBtn, enableContactBtn };