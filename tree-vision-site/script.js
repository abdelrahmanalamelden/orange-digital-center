let productImg = document.querySelector('.product-img');
let chooseImgs = document.querySelectorAll('.first'); // Select all images

console.log(productImg); // Check if the product image is correctly selected
console.log(chooseImgs); // Check if all the images are correctly selected

chooseImgs.forEach(function (chooseImg) {
  chooseImg.addEventListener('click', function () {
    productImg.src = chooseImg.src; // Set the product image to the clicked image's src
  });
});

let toggler = document.querySelector('.toggler');
let nav = document.querySelector('nav');
console.log(toggler, nav);

toggler.addEventListener('click', function () {
  nav.style.cssText =
    'display:flex;    flex-direction: column;position: absolute;top: 60px;left: 0;width: 100%;background-color: black;';
});
