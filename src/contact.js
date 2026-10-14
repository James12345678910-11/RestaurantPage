function contact() {
const content = document.querySelector(".content");
const contactHeading = document.createElement("h3");
contactHeading.textContent = " What is the special today? A succulent Chinese meal!";
const contactParagraph = document.createElement("p");
contactParagraph.innerHTML =
  "<p>What is the charge? Eating a meal? A succulent Chinese meal?<br></P><p>Get your hand off my penis!<br></p><p>Ah yes, I see that you know your judo well.<br></p>";
const contactUs = document.createElement("p");
contactUs.textContent = "something@example.com";
const contactNum = document.createElement("p");
contactNum.textContent = "000-000-0000";

content.appendChild(contactHeading);
content.appendChild(contactParagraph);
content.appendChild(contactUs);
content.appendChild(contactNum);
}

const contactPage = { load: contact };
export { contactPage };