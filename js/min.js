var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

var swiper = {
    hidden: {
        opacity: 1,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}
 swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        modifier: 3,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
});

const item = {
    hidden: {
        y: 20,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
};
let span = document.querySelector(".up");

window.onscroll = function () {
    this.scrollY >= 500 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
const myp = document.querySelectorAll(".font-p");

const fontSetting = document.querySelectorAll(".btn-font");

fontSetting.forEach(function(size){
    size.addEventListener("click",function(event){
        myp.forEach((p)=>{
            if(event.currentTarget.classList.contains("small")){
                p.style.fontSize="15px"
            }
            else if(event.currentTarget.classList.contains("meduim")){
                p.style.fontSize="18px"      
            }
            else if(event.currentTarget.classList.contains("large")){
                p.style.fontSize="23px"      
            }
        })
    })
});

// let buttons = document.querySelector('.buttons');

// let btn = buttons.querySelectorAll('.btn');

// for (var i = 0; i <btn.length; i++){
//     btn[i].addEventListener('click', function(){
//         let current = document.
//         getElementsByClassName('active');
//         current[0].className = current[0].className.replace("active", "");
//         this.className += " active";
//     })
// } 

// var iconFont = document.getElementById('iconFont'),

//     butt = document.getElementById('butt');

// iconFont.onclick = function () {
//     "use strict"
//     butt.classList.toggle('show')

// }
// var font = document.querySelectorAll('foont');

// font.onclick = function () {
//     "use strict"
//     font.classList.add('active')
// }

        