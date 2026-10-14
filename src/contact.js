function contact() {
const content = document.querySelector(".content");
const contactHeading = document.createElement("h3");
contactHeading.textContent = " Food so good you get we get arrested for it!";
const contactParagraph = document.createElement("p");
contactParagraph.innerHTML =
  "<ul><li>What is the charge? Eating a meal? A succulent Chinese meal?</li><li>Get your hand off my penis!</li><li>Ah yes, I see that you know your judo well.</li></ul>";
const contactUs = document.createElement("p");
contactUs.textContent = "something@example.com";
const contactNum = document.createElement("p");
contactNum.textContent = "000-000-0000";

content.appendChild(contactHeading);
content.appendChild(contactParagraph);
content.appendChild(contactUs);
content.appendChild(contactNum);
}

export const contactPage = contact();