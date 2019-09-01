var navZh = document.querySelector('.navbar-zh');

var nav = `<li class="navbar-item"><a href="index.html"> 台南好遊<div class="navbar_link"></div></a>
</li>
<li class="navbar-item"><a class="navbar-slide" href="#" data-toggle="collapse" data-target="#navDown1"> 台南好食 <div class="navbar_link"></div></a>
    <ul class="navbar-down collapse" id="navDown1" data-parent="#navbarMain">
        <li><a href="#">台南好食</a></li>
        <li><a href="#">台南好食</a></li>
        <li><a href="#">台南好食</a></li>
    </ul>
</li>
<li class="navbar-item"><a class="navbar-slide" href="#" data-toggle="collapse" data-target="#navDown2"> 台南好宿<div class="navbar_link"></div></a>
    <ul class="navbar-down collapse" id="navDown2" data-parent="#navbarMain">
        <li><a href="#">台南好宿</a></li>
        <li><a href="#">台南好宿</a></li>
        <li><a href="#">台南好宿</a></li>
    </ul>
</li>
<li class="navbar-item"><a class="navbar-slide" href="#" data-toggle="collapse" data-target="#navDown3"> 遊程客製<div class="navbar_link"></div></a>
    <ul class="navbar-down collapse" id="navDown3" data-parent="#navbarMain">
        <li><a href="#">遊程客製</a></li>
        <li><a href="#">遊程客製</a></li>
        <li><a href="#">遊程客製</a></li>
    </ul>
</li>
<li class="navbar-item"><a href="cart.html"> 購物車<div class="navbar_link"></div></a>
</li>
<li class="navbar-item login" data-toggle="modal" data-target=".login_bar"><a href="#"> 登入/註冊<div class="navbar_link"></div></a>
</li>`;

navZh.innerHTML = nav;

let navSlides = document.querySelectorAll('.navbar-slide');

function noLink(e) {
    e.preventDefault();
    console.log(e.target.className);
    // e.stopPropagation();
}

navSlides.forEach((navSlide) => {
    navSlide.addEventListener("click", noLink);
});



function getFooter() {
    let footer = document.querySelector('.footer');
    let footerHtml = `            <div class="container">
    <div class="row">
        <div class="footer-item col-12 col-lg-5">
            <p>青山旅行社</p>
            <p>交觀綜字2068號|品保協會高字號0005號</p>
            <p>Copyright © 2019 台南漫步遊 All Rights Reserved.</p>
        </div>

        <div class="footer-item col-12 col-lg-3">
            <p>台南市南區文南路51號2樓</p>
            <p>電話：(06)265-3536</p>
            <p>傳真：(06)265-4589</p>
        </div>
        <div class="footer-item footer-r col-12 col-lg-4">
            <a href="https://line.me/R/ti/p/%40hou2310s"  target="_blank">
                <span class="icon40 line">
                </span> 
            </a>
            <a href="https://www.facebook.com/%E5%8F%B0%E5%8D%97%E9%A3%9B%E6%8F%9A%E4%B9%8B%E6%97%85-1403287959889654/?epa=SEARCH_BOX" target="_blank">
                <span class="icon40 facebook">
                </span> 
            </a>
        </div>
    </div>
    </div>`;
    footer.innerHTML = footerHtml;
}
getFooter();