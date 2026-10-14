
import spaghettiSrc from './photo-files/spaghetti.jpg';
import lasagnaSrc from './photo-files/lasagna.jpg';
import chickenriceSrc from './photo-files/chickenrice.jpg';
import beefriceSrc from './photo-files/beefrice.jpg';
import sodaSrc from './photo-files/soda.jpg';
import milkshakeSrc from './photo-files/milkshake.jpg';


function menu() {
  const menu = document.createElement('div');
  const content = document.querySelector('.content');

  const heading = document.createElement('h1');
  heading.textContent = 'Menu';

  const pasta = document.createElement('h3');
  pasta.textContent = 'Pasta';

  const spaghettititle = document.createElement('p');
  spaghettititle.textContent = 'Spaghetti';
  const spaghetti = document.createElement('p');
  spaghetti.textContent = 'Spaghetti with tomato sauce and parmesan cheese.';
  const spaghettiImg = document.createElement('img');
  spaghettiImg.src = spaghettiSrc;
  spaghettiImg.onload = () => {
  console.log('Spaghetti image loaded!');
};

spaghettiImg.onerror = () => {
  console.log('Spaghetti image failed to load:', spaghettiImg.src);
};
  spaghettiImg.classList.add('menu-img');
  const spaghettiprice = document.createElement('p');
  spaghettiprice.textContent = '$12.99';

  const lasagnatitle = document.createElement('p');
  lasagnatitle.textContent = 'Lasagna';
  const lasagna = document.createElement('p');
  lasagna.textContent = 'Lasagna with ricotta cheese and marinara sauce.';
  const lasagnaImg = document.createElement('img');
  lasagnaImg.src = lasagnaSrc;
  lasagnaImg.classList.add('menu-img');
  const lasagnaprice = document.createElement('p');
  lasagnaprice.textContent = '$14.99';

  const ricebowls = document.createElement('h3');
  ricebowls.textContent = 'Rice Bowls';

  const chickenricetitle = document.createElement('p');
  chickenricetitle.textContent = 'Chicken Teriyaki Rice Bowl';
  const chickenrice = document.createElement('p');
  chickenrice.textContent = 'Chicken Teriyaki Rice Bowl with steamed vegetables.';
  const chickenriceImg = document.createElement('img');
  chickenriceImg.src = chickenriceSrc;
  chickenriceImg.classList.add('menu-img');
  const chickenriceprice = document.createElement('p');
  chickenriceprice.textContent = '$10.99';

  const beefricetitle = document.createElement('p');
  beefricetitle.textContent = 'Beef Bulgogi Rice Bowl';
  const beefrice = document.createElement('p');
  beefrice.textContent = 'Beef Bulgogi Rice Bowl with kimchi and pickled vegetables.';
  const beefriceImg = document.createElement('img');
  beefriceImg.src = beefriceSrc;
  beefriceImg.classList.add('menu-img');
  const beefriceprice = document.createElement('p');
  beefriceprice.textContent = '$11.99';

  const drinks = document.createElement('h3');
  drinks.textContent = 'Drinks';

  const sodatitle = document.createElement('p');
  sodatitle.textContent = 'Soda';
  const soda = document.createElement('p');
  soda.textContent = 'Coca-Cola, Sprite, or Fanta.';
  const sodaprice = document.createElement('p');
  sodaprice.textContent = '$1.99';
  const sodaImg = document.createElement('img');
  sodaImg.src = sodaSrc;
  sodaImg.classList.add('menu-img');

  const milkshaketitle = document.createElement('p');
  milkshaketitle.textContent = 'Milkshake';
  const milkshake = document.createElement('p');
  milkshake.textContent = 'Chocolate or Vanilla Milkshake.';
  const milkshakeprice = document.createElement('p');
  milkshakeprice.textContent = '$3.99';
  const milkshakeImg = document.createElement('img');
  milkshakeImg.src = milkshakeSrc;
  milkshakeImg.classList.add('menu-img');

  content.appendChild(menu);
  menu.appendChild(heading);
  menu.appendChild(pasta);
  menu.appendChild(spaghettititle);
  menu.appendChild(spaghetti);
  menu.appendChild(spaghettiImg);
  menu.appendChild(spaghettiprice);
  menu.appendChild(lasagnatitle);
  menu.appendChild(lasagna);
  menu.appendChild(lasagnaImg);
  menu.appendChild(lasagnaprice);
  menu.appendChild(ricebowls);
  menu.appendChild(chickenricetitle);
  menu.appendChild(chickenrice);
  menu.appendChild(chickenriceImg);
  menu.appendChild(chickenriceprice);
  menu.appendChild(beefricetitle);
  menu.appendChild(beefrice);
  menu.appendChild(beefriceImg);
  menu.appendChild(beefriceprice);
  menu.appendChild(drinks);
  menu.appendChild(sodatitle);
  menu.appendChild(soda);
  menu.appendChild(sodaImg);
  menu.appendChild(sodaprice);
  menu.appendChild(milkshaketitle);
  menu.appendChild(milkshake);
  menu.appendChild(milkshakeImg);
  menu.appendChild(milkshakeprice);

}

export const menuPage = menu();