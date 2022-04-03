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
            duration: 1000,
        }
    )

    event.preventdDefault()
})


$(window).scroll(function(){
    if($(this).scrollTop()>0){
        $('.scroll').fadeIn()
    } else{
        $('.scroll').fadeOut()
    }
})

let list = document.querySelector("#news-list")
function addNews(){
    fetch('news.json').then(res => res.json())
    .then(elem => {
        elem.map(el => {
            list.innerHTML += 
            `
            <div class="col-12 col-md-6 col-lg-4 news-list-card ">
                <img src="${el.img}" alt="" class="w-100 news-foto">
                <h4>${el.date}</h4>
                <a href="article.html?id=${el.id}">${el.description}</a>
                <p>
                    ${el.info}
                </p>
            </div>
            `
        })
    })
}

addNews()

let list1 = document.querySelector("#news-list1")
function addNews1(){
    fetch('news2.json').then(res => res.json())
    .then(elem => {
        elem.map(el => {
            list1.innerHTML += 
            `
            <div class="col-12 col-md-6 col-lg-4 news-list-card ">
                <img src="${el.img}" alt="" class="w-100 news-foto">
                <h4>${el.date}</h4>
                <a href="article.html?id=${el.id}">${el.description}</a>
                <p>
                    ${el.info}
                </p>
            </div>
            `
        })
    })
}



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