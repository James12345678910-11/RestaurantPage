function menu() {
  const menu = document.createElement('div');
  const content = document.querySelector('.content');
  const heading = document.createElement('h1');
  heading.textContent = 'Menu';
  const pasta = document.createElement('h3');
  pasta.textContent = 'Pasta';

  const spaghetti = document.createElement('p');
  spaghetti.textContent = 'Spaghetti with tomato sauce and parmesan cheese.';
  const spaghettiimg = document.createElement('img');
  spaghettiimg.src = 'https://images.unsplash.com/photo-1604908177520-1e3f5c8b6d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
  const spaghettiprice = document.createElement('p');
  spaghettiprice.textContent = '$12.99';

  const lasagna = document.createElement('p');
  lasagna.textContent = 'Lasagna with ricotta cheese and marinara sauce.';
  const lasagnaimg = document.createElement('img');
  lasagnaimg.src = "https://images.unsplash.com/photo-1617196030422-7a9b5c6e5b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const lasagnaprice = document.createElement('p');
  lasagnaprice.textContent = '$14.99';

  const ricebowl = document.createElement('h3');
  ricebowl.textContent = 'Rice Bowl';
  

  const salad = document.createElement('h3');
  salad.textContent = 'Salad';
}

export default menu;