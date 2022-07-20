const collegeDataSets = {
  collegeData: [
    {
      name: 'A',
      location: 'Berkeley, CA',
      description:
        'In University of california we get lots of opportunity to learn many things and master our skills',
    },
    {
      name: 'B',
      location: 'Los Angeles, CA',
      description:
        'In University of california we get lots of opportunity to learn many things and master our skills',
    },
    {
      name: 'C',
      location: 'Riverside, CA',
      description:
        'In University of california we get lots of opportunity to learn many things and master our skills',
    },
  ],
};

/**
 * The function takes in a string as a parameter, and then adds an event listener to each college card
 * that toggles the class of the aside element to either active or inactive depending on the event
 * type.
 * @param eventParams - 'mouseover' or 'mouseout'
 */
const aside = document.getElementsByClassName('sidedrawer');
console.log(aside[0]);

const collegeCards = document.getElementsByClassName('college_cards');

function openNav(eventParams) {
  for (let i = 0; i < collegeCards.length; i++) {
    collegeCards[i].addEventListener(eventParams, function () {
      aside[0].classList.toggle('sidedrawer--inactive');
      aside[0].classList.toggle('sidedrawer--active');

      // change content of aside
      //set college name
      const collegeNameNode = document.getElementById('college-name');
      const newCollegeName = collegeDataSets.collegeData[i].name;
      collegeNameNode.innerHTML = `${newCollegeName}`;
      //set college location
      const collegeLocationNode = document.getElementById('college-location');
      const newCollegeLocation = collegeDataSets.collegeData[i].location;
      collegeLocationNode.innerHTML = `${newCollegeLocation}`;

      //set college description
      const collegeDescriptionNode = document.getElementById(
        'college-description'
      );
      const newCollegeDescription = collegeDataSets.collegeData[i].description;
      collegeDescriptionNode.innerHTML = `${newCollegeDescription}`;
    });
  }
}

openNav('mouseover');
openNav('mouseout');

// Language: javascript
