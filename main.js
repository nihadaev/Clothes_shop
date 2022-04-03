let openmenu = document.querySelector(".mobile-menu")
let active= document.querySelector(".header-mobile-menu")
let unactive= document.querySelector(".mobile-menu.aktive")

openmenu.addEventListener("click", () =>{
    active.classList.add("activated")
})

unactive.addEventListener("click", () => {
    active.classList.remove("activated")
})

// MOBILE MENU
$('a.yakor').on('click', function(event) {
    var $anchor= $(this)

    $('html,body')

    .stop()

    .animate(
    
        {

            scrollTop: $($anchor.attr('href')).offset().top,

        },

        {
            duration: 0,
        }
    )

    event.preventdDefault()
})

let scrolll= document.querySelector(".scroll")

$(document).ready(function () {
    if($(window).scrollTop()< 1){
        $('.scroll').fadeOut()
    }
    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $('.scroll').fadeIn()
        } else{
            $('.scroll').fadeOut()
        }
    })
})
let list = document.querySelector("#list")

function addProducts(){
    fetch("products.json").then(res => res.json())
    .then(e => {
        e.map(el => {
            list.innerHTML += `
                <div class="col-6 col-md-4 col-lg-4 section4-card">
                    <div class="section4-card-img">
                        <img src="${el.image}" alt="" class="w-100 h-100">
                        <div class="overlay">

                        </div>
                    </div>
                    <ul class="w-100 d-flex justify-content-between align-content-center">
                        <li>
                            <p>${el.desciption}
                            </p>
                        </li>
                        <li><a href="#"><img src="${el.wish}" alt=""></a></li>
                    </ul>

                    <span class="sale-price">${el.sale}</span>
                    <span class="price">${el.price}</span>
                </div>
            `
        })
    })
}

addProducts()


let openclothes = document.querySelector(".openclothes")

function openClothes(){
    let clothes = document.querySelector(".clothes-ul");
    clothes.classList.add("opened");

    let mobmenu = document.querySelector(".mob-menu-ul");
    mobmenu.classList.add("zakrit");

    let social = document.querySelector(".social-ul");
    social.classList.add("zakrit");

    let collection = document.querySelector(".collection-ul");
    collection.classList.add("zakrit");
    
}

function closeClothes(){
    let clothes = document.querySelector(".clothes-ul");
    clothes.classList.remove("opened");

    let mobmenu = document.querySelector(".mob-menu-ul");
    mobmenu.classList.remove("zakrit");

    let social = document.querySelector(".social-ul");
    social.classList.remove("zakrit");

    let collection = document.querySelector(".collection-ul");
    collection.classList.remove("zakrit");
}


function openCollection(){ 
    let collection = document.querySelector(".collection-ul");
    collection.classList.add("opened");

    let mobmenu = document.querySelector(".mob-menu-ul");
    mobmenu.classList.add("zakrit");

    let social = document.querySelector(".social-ul");
    social.classList.add("zakrit");

    
}

function closeCollection(){
    let collection = document.querySelector(".collection-ul");
    collection.classList.remove("opened");

    let mobmenu = document.querySelector(".mob-menu-ul");
    mobmenu.classList.remove("zakrit");

    let social = document.querySelector(".social-ul");
    social.classList.remove("zakrit");
}



// Swiper
var swiper = new Swiper(".mySwiper", {
    // effect: "cards",
    grabCursor: true,
    // autoHeight: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    speed: 500,

    breakpoints: {
        320: {
            slidesPerView: 1
        }
    },
    pagination:{
        el: '.swiper-pagination',
        clickable : true,
        dinamicBullets: true,

        renderBullet: function(index,className){
            return '<span class=" ' + className + '" > ' + (index+1) + '</span>';
        }
    },
    
  });

  // AOS
AOS.init({
    duration: 1500,
});





$(".footeremail").click(function () {
    swal({
        title: "Good job!",
        text: "Thanks for subscription!",
        icon: "success",
        button: "Ok",
      });
    // swal({
    //     title: "Are you sure?",
    //     text: "Once deleted, you will not be able to recover this imaginary file!",
    //     icon: "warning",
    //     buttons: true,
    //     dangerMode: true,
    //   })
    //   .then((willDelete) => {
    //     if (willDelete) {
    //       swal("Poof! Your imaginary file has been deleted!", {
    //         icon: "success",
    //       });
    //     } else {
    //       swal("Your imaginary file is safe!");
    //     }
    //   });
})