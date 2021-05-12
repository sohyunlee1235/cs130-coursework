/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
            <li class="card">
                <div class="image" 
                    style="background-image:url('${image}')"
                    data-index="${idx}"></div>
            </li>`;
    });
};

initScreen();



document.querySelector('.featured_image').outerHTML = `
    <div class="featured_image" 
    style="background-image:url('images/field1.jpg')" 
    data-index="0"> </div>`;

// create event handler:
const showImage = (ev) => {
    const elem = ev.currentTarget;
    console.log(elem.style.backgroundImage);
    document.querySelector('.featured_image').style.backgroundImage = elem.style.backgroundImage;
    document.querySelector('.featured_image').dataset.index = elem.dataset.index;
};

// attach event handler to all of the image tags 
// (after initScreen() has been invoked).

// first get all of the image elements from the DOM:
const imageElements = document.querySelectorAll('.image');

// then loop through each one and attach an event handler
// to each element's click event:
for (const elem of imageElements) {
    elem.onclick = showImage;
}

// how to select the image with a specific data index? 
const showNextImage = (ev) => {
    const currentImage = document.querySelector('.featured_image');

    if (currentImage.dataset.index == 7) {
        currentImage.dataset.index = -1 
    }; 
    nextIndex = Number(currentImage.dataset.index) + 1;
    template1 = `[data-index='${nextIndex}']`;
    nextImage = document.querySelector(template1);

    document.querySelector('.featured_image').style.backgroundImage = nextImage.style.backgroundImage;
    document.querySelector('.featured_image').dataset.index = nextImage.dataset.index;
};

document.querySelector(".featured_image").onclick = showNextImage;
document.querySelector('.next').onclick = showNextImage;

const showPrevImage = (ev) => {
    const currentImage = document.querySelector('.featured_image');

    if (currentImage.dataset.index == 0) {
        currentImage.dataset.index = 8 
    }; 
    prevIndex = Number(currentImage.dataset.index) - 1;
    template2 = `[data-index='${prevIndex}']`;
    prevImage = document.querySelector(template2);

    document.querySelector('.featured_image').style.backgroundImage = prevImage.style.backgroundImage;
    document.querySelector('.featured_image').dataset.index = prevImage.dataset.index;
};

document.querySelector(".prev").onclick = showPrevImage;

