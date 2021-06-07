// Main slide
var defaultWidth = document.querySelector(".slide").clientWidth;
var changeSlide = document.querySelector(".slide-change");
var countSlide = document.querySelectorAll(".slide-change img").length;
var change = 0;
var preBtn = function () {
    if (change != 0) {
        change -= defaultWidth;
        changeSlide.style.marginLeft = "-" + change + "px";
    } else {
        change = (countSlide - 1) * defaultWidth;
        changeSlide.style.marginLeft = "-" + change + "px";
    }
};
var nextBtn = function () {
    if (change < (countSlide - 1) * defaultWidth) {
        change += defaultWidth;
        changeSlide.style.marginLeft = "-" + change + "px";
    } else {
        change = 0;
        changeSlide.style.marginLeft = "-" + change + "px";
    }
};

setInterval(nextBtn, 5000);

// Custommers's slide
var showLess = document.querySelectorAll(".customers-info-item-content-btn span");
var getItemContent = document.querySelectorAll(".customers-info-item-content");
showLess.forEach(function (e, index) {
    e.onclick = function () {
        let elements = window.getComputedStyle(getItemContent[index]);
        if (elements.maxHeight == "120px") {
            getItemContent[index].style.maxHeight = "unset";
            e.innerHTML = `<i class="fas fa-chevron-up"></i>
            Show less`;
        } else {
            getItemContent[index].style.maxHeight = 120 + "px";
            e.innerHTML = `<i class="fas fa-chevron-down"></i>
            Read more`;
        }
    };
});
