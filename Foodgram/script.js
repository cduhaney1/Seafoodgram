console.log("is this thing on? hello?")

// When we click any .picture-frame
// A const is a "constant variable "
// which means it can not be reassigned
const targetElements = document.querySelectorAll("[data-target]");
// We see an enlarged version of image.
// inside that .picture-frame

function respondToClick(event) {
    console.log('hello');
    console.log('how are you?');
    console.log('I am great I am eating seafood');

    console.log(event.target.parentElement);
    // add the "big" class to the thing that got clicked
    event.target.classList.toggle("big");
}
function attachClickHandler(oneElement) {
   // This is how we handle one element.
    oneElement.addEventListener("click", respondToClick);
}

targetElements.forEach(attachClickHandler);