function hideElementOnSmallScreens() {
    var element = document.querySelector('.hidden-mainSectionThird');
    if (window.innerWidth <= 1079) {
        element.classList.add('hidden');
    } else {
        element.classList.remove('hidden');
    }
}

// Initially hide/show element based on screen size
hideElementOnSmallScreens();

// Recheck on window resize
window.addEventListener('resize', hideElementOnSmallScreens);