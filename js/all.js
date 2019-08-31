var bodyh = document.body;
function windowsHeight() {
    bodyh.style.height = window.innerHeight + "px";
}
windowsHeight();
window.addEventListener('resize', windowsHeight);

var memPassword = document.querySelector('.mem_password');
var memCheckPassword = document.querySelector('.mem_checkPassword');
function checkPassword() {
    var alertPassword = document.querySelector('.alertPassword');
    if (memPassword.value !== memCheckPassword.value) {
        alertPassword.innerHTML = '與密碼不一致';
    } else {
        alertPassword.innerHTML = '';
    }
};
if(memPassword !== null){
    memPassword.addEventListener('blur', checkPassword);
};
if(memCheckPassword !== null){
    memCheckPassword.addEventListener('blur', checkPassword);
};



var memEmail = document.querySelector('.mem_email');
function iEmail() {
    let alertEmail = document.querySelector('.alertEmail');
    if (memEmail.value.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1) {
        alertEmail.innerHTML = '';
    } else {
        alertEmail.innerHTML = 'E-mail格式不符';
    };
};

if(memEmail !== null){
    memEmail.addEventListener('blur', iEmail);
};






var lists = document.querySelectorAll('.cart-list');

if (lists.length >= 1) {
    cart();
}

function cart() {
    var add = document.querySelectorAll('.add');
    var reduce = document.querySelectorAll('.reduce');
    var val = document.querySelectorAll('.quantity input');
    var price = document.querySelectorAll('.price .value');
    var subt = document.querySelectorAll('.subtotal .value');
    var total = document.querySelector('.total .value');


    for (let i = 0; i < lists.length; i++) {
        subt[i].textContent = price[i].textContent * val[i].value;
        total.textContent = total.textContent * 1 + subt[i].textContent * 1;
        add[i].addEventListener('click', quantityAdd);
        function quantityAdd() {
            val[i].value = val[i].value * 1 + 1;
            // return val[i].value;
            subt[i].textContent = price[i].textContent * val[i].value;
            total.textContent = total.textContent * 1 + price[i].textContent * 1;
        }
        reduce[i].addEventListener('click', quantityReduce);

        function quantityReduce() {
            if (val[i].value != 0) {
                val[i].value = val[i].value * 1 - 1;
                total.textContent = total.textContent * 1 - price[i].textContent * 1;
            } else {
                val[i].value == 0;
                total.textContent == 0;
            }
            subt[i].textContent = price[i].textContent * val[i].value;



        };
    };
}






$(document).ready(function () {

$('.wrap').on('click', function (e) {
            if (e.target.className != 'navbar-slide' && e.target.className != 'navbar-slide collapsed'){
                $('.navbar-down').collapse('hide');
            }
        })

    $('.m_btn > .icon').click(function () {
        $('.wrap-shadows').toggle();
    })

    $('.wrap-shadows').click(function () {
        $('.wrap-shadows').hide();
        $('.navbar').collapse('hide');
    })


    $('[data-toggle="datepicker"]').datepicker({
        language: 'zh-TW',
        format: 'yyyy/mm/dd',
        autoHide: true,

    });


    $('.main-carousel').owlCarousel({
        loop: true,
        nav: true,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })
    $('.owl-Tour').owlCarousel({
        singleItem: true,
        loop: true,
        nav: true,
        dots: false,
        dotsClass: false,
        navText: ['<span class="fas fa-angle-left "></span>', '<span class="fas fa-angle-right "></span>'],
        responsive: {
            0: {
                items: 1
            },
            586: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }

        }
    })

})