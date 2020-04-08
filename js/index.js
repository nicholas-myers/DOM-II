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
h1.style.padding = "10px";
h1.style.borderRadius = "10px";

//EVENT 4
const changeHeaderColors = (event) => {
  const randomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  //   console.log(randomNumber(100));
  const rgb1 =
    "rgb(" +
    randomNumber(200) +
    ", " +
    randomNumber(200) +
    ", " +
    randomNumber(200) +
    ")";
  const rgb2 =
    "rgb(" +
    randomNumber(300) +
    ", " +
    randomNumber(300) +
    ", " +
    randomNumber(300) +
    ")";
  const rgb3 =
    "rgb(" +
    randomNumber(400) +
    ", " +
    randomNumber(400) +
    ", " +
    randomNumber(400) +
    ")";
  header.style.backgroundColor = rgb1;
  h1.style.color = rgb2;
  h1.style.backgroundColor = rgb3;
};
//EVENT 4
window.addEventListener("scroll", changeHeaderColors);

///////////////// Header IMage animation on Load /////////////////////
const introImg = getOne(".intro img");
introImg.style.borderRadius = "10px";
introImg.style.padding = "100px";

const introImgAnimation = (event) => {
  introImg.style.padding = "";
  introImg.style.borderRadius = "10px";
  introImg.style.transition = "1s";
  // console.log("I'm Happening");
};
//event 5
introImg.addEventListener("load", introImgAnimation);

//////////////////// Doubleclick Alert on Images //////////////////////

const images = getAll("img");

//event 6
const imgAlert = (event) => {
  alert("This is a great Destination!!");
};

for (let i = 0; i < images.length; i++) {
  const image = images[i];
  image.addEventListener("dblclick", imgAlert);
}

////////////////// Change Text size when selcting ///////////////

const pars = getAll("p");

//event 7
const enlargeParText = (event) => {
  event.target.style.fontSize = `3rem`;
};

for (let i = 0; i < pars.length; i++) {
  const par = pars[i];
  par.addEventListener("wheel", enlargeParText);
}


////////// DRAG and DROP ////////////////
const buttons = getAll(".btn");
const destPars = getAll(".destination p");

const changeDestParText = (event) => {
    for(let i = 0; i < destPars.length; i++) {
        const destPar = destPars[i];
        destPar.textContent = "Drop Me Here!";
        destPar.style.border = "3px solid aqua";
        destPar.style.textAlign = "center";
        destPar.style.height = "100px";
    }; //close for
};


for(let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    //EVENT 8
    button.addEventListener("drag", changeDestParText);
    button.style.cursor = "move";
    button.setAttribute("draggable", "true");
};


