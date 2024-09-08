let body = document.querySelector('body');

let quires = new URLSearchParams(location.search);
let pid = quires.get('id');
let getData = async () => {
  let result = await fetch('https://dummyjson.com/products/' + pid);
  let product = await result.json();
  body.innerHTML = `
  <div class= 'container'>
  <div class = 'card'>
  <img src='${product.thumbnail}' >
  <div class='content'>
  <h3>${product.title}</h3>
  <p>${product.price}$</p>
  <a href="#">More Details</a></div>
  </div>
  </div>
  `;
};
getData();
