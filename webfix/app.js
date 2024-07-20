document.addEventListener('DOMContentLoaded', function() {
    const searchToggle = document.querySelector('.search-toggle');
    const overlay = document.getElementById('overlay');
    const closeSearch = document.getElementById('closeSearch');

    searchToggle.addEventListener('click', function(event) {
        event.preventDefault();
        overlay.classList.toggle('active');
    });

    closeSearch.addEventListener('click', function() {
        overlay.classList.remove('active');
    });
});






flag = 0;

let slider = document.querySelectorAll("#slider");

slideshow(flag)

function slideshow(num) {


    let slider = document.querySelectorAll("#slider");

    let dots = document.querySelectorAll(".dot");



    if (num == slider.length) {

        flag = 0
        num = 0
    }

    if (num < 0) {

        flag = slider.length - 1
        num = slider.length - 1
    }

    
    for (i = 0; i < slider.length; i++) {


        slider[i].style.display = "none"

    }

    flag++;

    for (k = 0; k < dots.length; k++) {


        dots[k].classList.remove("bg_color")

    }

    dots[num].classList.add("bg_color")

    slider[num].style.display = "block"



    slider[num].style.transition = "1s ease-in-out"


    setTimeout(() => {

        slideshow(flag);
    }, 5000);

}



var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})









