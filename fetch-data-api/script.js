let container = document.querySelector('.container');
let getData = async () => {
  let error;
  let results = await fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .catch((e) => {
      error = e;
    });
  let products = [...results?.products];

  products.map((product) => {
    if (product.thumbnail) {
      container.innerHTML += `
<div class = 'card'>
<img src="${product.thumbnail}" alt = '${product.title}'>
<h3>${product.title}</h3>
<p>${product.price}$</p>
<a href='./singleProduct.html?id=${product.id}'>Click Here</a>
</div>
`;
    }
  });
};
getData();
