// Your code goes here

////////// GET FUNCTIONS ///////////////
const getOne = (selector) => {
  return document.querySelector(selector);
};

const getAll = (selector) => {
  return document.querySelectorAll(selector);
};

////////////////////// LINKS /////////////////////////
const links = getAll("a");

/////// HOVER EFFECT EVENTS
// EVENT 1
const linkHover = (event) => {
  event.target.style.backgroundColor = "dodgerblue";
  event.target.style.color = "white";
};

// EVENT 2
const linkExit = (event) => {
  event.target.style.backgroundColor = "lightblue";
  event.target.style.color = "black";
  event.target.style.transform = "";
  event.target.style.boxShadow = "0 4px #999";
}; //closes link exit

///////// CLICK EVENT
//Event 3
const clickAnimation = (event) => {
  event.target.style.transform = "translateY(4px)";
  event.target.style.boxShadow = "0 5px #666";
};

////////// APPLLIES TO EACH LINK ////////////
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.style.padding = "10px";
  link.style.borderRadius = "10px";
  link.style.boxShadow = "0 4px #999";
  link.style.backgroundColor = "lightblue";
  link.addEventListener("mouseover", linkHover);
  link.addEventListener("mouseleave", linkExit);
  link.addEventListener("click", clickAnimation);
} //closes for

/////////// CHANGE HEADER COLORS ON SCROLL //////////
const header = getOne("header");
const h1 = getOne("h1");

const changeHeaderColors = (event) => {
    const randomNumber = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
      };
    //   console.log(randomNumber(100));
    const rgb1 = "rgb(" + randomNumber(200) + ", " + randomNumber(200) + ", " + randomNumber(200) + ")";
    const rgb2 = "rgb(" + randomNumber(300) + ", " + randomNumber(300) + ", " + randomNumber(300) + ")";
    header.style.backgroundColor = rgb1;
    h1.style.color = rgb2;
};

window.addEventListener("scroll", changeHeaderColors);

///////////////// 