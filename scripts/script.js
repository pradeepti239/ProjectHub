const aside = document.getElementsByClassName('sidedrawer');
console.log(aside[0]);

const collegeCards = document.getElementsByClassName('college_cards');

function openNav(eventParams) {
  for (let i = 0; i < collegeCards.length; i++) {
    collegeCards[i].addEventListener(eventParams, function () {
      aside[0].classList.toggle('sidedrawer--inactive');
      aside[0].classList.toggle('sidedrawer--active');
    });
  }
}

openNav('mouseover');
openNav('mouseout');

// Language: javascript
