// Step 1: Get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let sliderDom = carouselDom.querySelector('.list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]); // Initialize thumbnail
let timeRunning = 2000;
let timeAutoNext = 5000;

nextDom.onclick = function () {
    showSlider('next');
};

prevDom.onclick = function () {
    showSlider('prev');
};

let runTimeOut;
let runNextAuto; // Defined at the top for better scope handling

function startAutoNext() {
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click(); // Fixed: Should use nextDom
    }, timeAutoNext);
};

function showSlider(type) {
    let sliderItemsDom = sliderDom.querySelectorAll('.item');
    let currentThumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item'); // Avoid shadowing

    if (type === 'next') {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(currentThumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(currentThumbnailItemsDom[currentThumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    startAutoNext(); // Initiate next auto
}
function openNewPage() {
    // Get the URL of the page you want to open
    const newPageUrl = "launch.html"; // Replace with your desired URL

    // Open the new page in a new tab
    window.open(newPageUrl);
}


// Start the automatic slider on page load
startAutoNext();
