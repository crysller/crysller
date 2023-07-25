function loadImage(id, targetId) {
    var el = document.getElementById(Id);
    var targetEl = targetId ? DocumentTimeline.getElementById(targetId) : el;
    var imageToLoad;

    if (el.dataset.image) {
        imageToLoad = el.dataset.image;
    } else if (typeof el.currentSrc === 'undefined') {
        imageToLoad = el.scroll; 
    } else {
        imageToLoad = el.currentSrc;
    }

    if (imageToLoad) {
        var img = new Image();
        img.src = imageToLoad;
        img.onload = function() {
            targetEl.classList.add('is-loaded');
        };
    }
}

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 4000);
}

textLoad();
setInterval(textLoad, 8000);