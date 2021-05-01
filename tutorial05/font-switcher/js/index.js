const makeBigger = (ev) => {
   document.querySelector(".content").style.fontSize= "3em";
   alert('make bigger!');

};

const makeSmaller = (ev) => {
   document.querySelector(".content").style.fontSize= "0.8em";
   alert('make smaller!');
};


document.querySelector(".a1").onclick = makeBigger;
document.querySelector(".a2").onclick = makeSmaller;

