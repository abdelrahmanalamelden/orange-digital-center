// let chickenContainer = document.querySelector('.chickenContainer');
// var rocket = document.querySelector('.rocket');

// //Creating and Styling Chicken Image
// for (let i = 0; i < 60; i++) {
//   let chickenEl = document.createElement('img');
//   chickenEl.setAttribute('class', 'chicken');
//   chickenEl.src = '/Images/Chicken.png';
//   chickenContainer.append(chickenEl);
// }

// //Move Rocket
// let positionY = 0;
// window.addEventListener('keydown', function (e) {
//   if (e.code === 'ArrowUp') {
//     positionY += 10;
//     rocket.style.bottom = positionY + 'px';
//   }
// });
let container = document.querySelector('.container');
let chickenContainer = document.querySelector('.chickenContainer');
var rocket = document.querySelector('.rocket');
let containerSize = container.getBoundingClientRect();
console.log(containerSize);

// Creating and Styling Chicken Image
for (let i = 0; i < 60; i++) {
  let chickenEl = document.createElement('img');
  chickenEl.setAttribute('class', 'chicken');
  chickenEl.src = '/Images/Chicken.png';
  chickenContainer.append(chickenEl);
}

// Move Rocket
let positionY = 0;
let positionX = 0;
let bulletPosition = 0;
window.addEventListener('keydown', function (e) {
  if (e.code === 'ArrowUp') {
    if (positionY >= containerSize.height - 150) {
      positionY = containerSize.height - 150;
    }
    positionY += 10;
    rocket.style.bottom = positionY + 'px';
  }
  if (e.code === 'ArrowDown') {
    if (positionY <= 10) {
      positionY = 10;
    }
    positionY -= 10;
    rocket.style.bottom = positionY + 'px';
  }
  if (e.code === 'ArrowRight') {
    if (positionX >= containerSize.width - 150) {
      positionX = containerSize.width - 150;
    }
    positionX += 10;
    rocket.style.left = positionX + 'px';
  }
  if (e.code === 'ArrowLeft') {
    if (positionX <= 10) {
      positionX = 10;
    }
    positionX -= 10;
    rocket.style.left = positionX + 'px';
  }

  // Fire bullet on Space key press
  if (e.code === 'Space') {
    var bullet = document.createElement('img');
    bullet.classList.add('bullet');
    bullet.src = '/Images/Bullet.png';
    bullet.style.position = 'absolute';
    bullet.style.left = rocket.offsetLeft + rocket.offsetWidth / 2 - 5 + 'px'; // Position bullet horizontally centered on the rocket
    bullet.style.bottom = positionY + rocket.offsetHeight + 'px'; // Position bullet just above the rocket
    document.body.appendChild(bullet);

    // Initialize bullet position
    let bulletPosition = parseInt(bullet.style.bottom);

    // Move the bullet upwards
    let interval = setInterval(function () {
      bulletPosition += 10;
      bullet.style.bottom = bulletPosition + 'px';

      // Stop the interval and remove the bullet if it goes off screen
      if (bulletPosition > window.innerHeight) {
        clearInterval(interval);
        bullet.remove();
      }
    }, 10);
  }
});
