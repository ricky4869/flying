var bodyh = document.body;
function windowsHeight() {
    bodyh.style.height = window.innerHeight + "px";
}
windowsHeight();
window.addEventListener('resize', windowsHeight);

$(document).ready(function () {

$('.wrap').on('click', function (e) {
            if (e.target.className != 'navbar-slide' && e.target.className != 'navbar-slide collapsed'){
                $('.navbar-down').collapse('hide');
            }
        })

    $('.m_btn > .icon').click(function () {
        $('.wrap-shadows').collapse('toggle');
    })

    $('.wrap-shadows').click(function () {
        $('.wrap-shadows').collapse('hide');
        $('.navbar').collapse('hide');
    })



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

    $('[data-toggle="datepicker"]').datepicker({
        changeYear:true,
        language: 'zh-TW',
        format: 'yyyy/mm/dd',
        autoHide: true

    })



})