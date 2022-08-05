"use strict";

//
const collegeDataSets = {
  defaultCollegeData: {
    name: "Deerwalk Developer College",
    logoUrl: "./images/college-logos/deerwalk-college.png",
    location: "Deerwalk, Illinois",
    description: `
    Deerwalk Institute of Technology is a private college established in 2010 in collaboration between Nepalese entrepreneurs and the United States-based software company, Deerwalk Inc. It is an affiliation to Tribhuvan University, which is the oldest University in Nepal. 
    
  `,

    facebookUrl: "https://www.facebook.com/dwit.college",
    linkedInUrl: "https://www.linkedin.com/company/deerwalk-inc/",
    instagramUrl:
      "https://www.instagram.com/explore/locations/1021688517/deerwalk-institute-of-technology?hl=en",
    websiteUrl: " https://deerwalk.edu.np/DWIT/",
  },
};

/**
 * The function takes in a string as a parameter, and then adds an event listener to each college card
 * that toggles the class of the aside element to either active or inactive depending on the event
 * type.
 * @param eventParams - 'mouseover' or 'mouseout'
 */
const aside = document.getElementsByClassName("sidedrawer");

const collegeCards = document.getElementsByClassName("college_cards");

function openNav(eventParams) {
  if (collegeCards.length <= 3) {
    for (let i = 0; i < collegeCards.length; i++) {
      collegeCards[i].addEventListener(eventParams, function () {
        aside[0].classList.toggle("sidedrawer--inactive");
        aside[0].classList.toggle("sidedrawer--active");

        const extraCollegeCard =
          document.getElementsByClassName("college_cards");

        const collegeImageDataValue =
          extraCollegeCard[i].getElementsByClassName("card-img-top")[0];
        const collegeNameDataValue =
          extraCollegeCard[i].getElementsByClassName("college_title_home")[0];
        const collegeLocationDataValue = extraCollegeCard[
          i
        ].getElementsByClassName("college_address_home")[0];

        setDataInAside(
          collegeNameDataValue.innerHTML,
          collegeLocationDataValue.innerHTML
        );

        setLinkInAside(undefined, undefined, undefined, undefined);
        setImgInAside(collegeImageDataValue.src);
      });
    }
  } else {
    for (let i = 0; i < collegeCards.length; i++) {
      collegeCards[i].addEventListener(eventParams, function () {
        aside[0].classList.toggle("sidedrawer--inactive");
        aside[0].classList.toggle("sidedrawer--active");

        setDataInAside(
          allCollegesDataSet[i].name,
          allCollegesDataSet[i].location,
          allCollegesDataSet[i].description
        );

        setLinkInAside(
          allCollegesDataSet[i].facebookUrl,
          allCollegesDataSet[i].linkedInUrl,
          allCollegesDataSet[i].instagramUrl,
          allCollegesDataSet[i].websiteUrl
        );
        setImgInAside(allCollegesDataSet[i].logoUrl);
      });
    }
  }
}

openNav("mouseover");
openNav("mouseout");

//  set default college data when directly  hovered in navbar

document
  .getElementsByClassName("sidedrawer")[0]
  .addEventListener("mouseover", function () {
    setDataInAside(
      collegeDataSets.defaultCollegeData.name,
      collegeDataSets.defaultCollegeData.location,
      collegeDataSets.defaultCollegeData.description
    );
    setLinkInAside(
      collegeDataSets.defaultCollegeData.facebookUrl,
      collegeDataSets.defaultCollegeData.linkedInUrl,
      collegeDataSets.defaultCollegeData.instagramUrl,
      collegeDataSets.defaultCollegeData.websiteUrl
    );
    setImgInAside(collegeDataSets.defaultCollegeData.logoUrl);
  });

// Language: javascript

/**
 * This function takes in three parameters, and then changes the content of the aside element to match
 * the parameters.
 * @param nameParam - "University of California, Berkeley"
 * @param locationParam - "New York, NY"
 * @param descriptionParam - "The University of Texas at Austin is a public research university in
 * Austin, Texas. It was founded in 1883 and is the flagship institution of the University of Texas
 * System. The University of Texas was inducted into the Association of American Universities in 1929,
 * becoming only the third university in the American South
 */
const setDataInAside = (
  nameParam,
  locationParam,
  descriptionParam = undefined
) => {
  // change content of aside
  //?set college name
  const collegeNameNode = document.getElementById("college-name");
  const newCollegeName = nameParam;
  collegeNameNode.innerHTML = `${newCollegeName}`;
  //?set college location
  const collegeLocationNode = document.getElementById("college-location");
  const newCollegeLocation = locationParam;
  collegeLocationNode.innerHTML = `${newCollegeLocation}`;

  //?set college description
  const collegeDescriptionNode = document.getElementById("college-description");

  const collegeDescriptionSectionNode = document.getElementById(
    "college_description_division"
  );

  if (descriptionParam === null || descriptionParam === undefined) {
    collegeDescriptionSectionNode.style.display = "none";
  } else {
    collegeDescriptionSectionNode.style.display = "block";
  }

  const newCollegeDescription = descriptionParam;
  collegeDescriptionNode.innerHTML = `${newCollegeDescription}`;
};

const setLinkInAside = (
  facebookLinkParam = null,
  linkedInLinkParam = null,
  instagramLinkParam = null,
  websiteLinkParam = null
) => {
  const facebookLink = document.getElementById("facebook_link");
  const linkedInLink = document.getElementById("linkedin_link");
  const instLink = document.getElementById("instagram_link");
  const websiteLink = document.getElementById("website_link");

  //change attribute of anchor tag of icons in aside
  // hiden  icon if  link is null
  if (facebookLinkParam === null) {
    facebookLink.style.display = "none";
  } else {
    facebookLink.href = facebookLinkParam;
    facebookLink.style.display = "block";
  }
  if (linkedInLinkParam === null) {
    linkedInLink.style.display = "none";
  } else {
    linkedInLink.href = linkedInLinkParam;
    linkedInLink.style.display = "block";
  }
  if (instagramLinkParam === null) {
    instLink.style.display = "none";
  } else {
    instLink.href = instagramLinkParam;
    instLink.style.display = "block";
  }
  if (websiteLinkParam === null) {
    websiteLink.style.display = "none";
  } else {
    websiteLink.href = websiteLinkParam;
    websiteLink.style.display = "block";
  }
};

/**
 * This function takes a string as an argument and sets the src attribute of the logo image to the
 * string.
 * @param logoLocation - the location of the image you want to use.
 */
const setImgInAside = (logoLocation) => {
  const logoImgNode = document.getElementById("sidedrawer-logo");
  logoImgNode.src = logoLocation;
};
