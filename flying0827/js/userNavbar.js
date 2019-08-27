var header = document.querySelector('.header')

var nav = `            <div class="container">
<div class="row">
    <div class="col-6 col-lg-3 logo">
        <a href="index.html" target="_blank"><img src="img/newlogo2.png" alt=""></a>
    </div>
    <div class="navbar d-lg-flex col-lg-9 col-0 collapse" id="navbarMoblie">
        <ul class="container">
            <li class="navbar-item"><a href="userCart.html"><span class="fas fa-shopping-cart"></span> 購物車管理</a>
            </li>
            <li class="navbar-item"><a href="userTourSearch.html"><span class="fas fa-map-marked-alt"></span> 遊程管理</a>
            </li>
            <li class="navbar-item"><a href="userAddChange.html"><span class="fas fa-image"></span> 遊程新增</a>
            </li>
            <li class="navbar-item"><a href="userMember.html"><span class="fas fa-user"></span> 會員管理</a>
            </li>
            <li class="navbar-item"><a href="userSgin.html"><span class="fas fa-sign-in-alt"></span> 登入/登出</a>
            </li>
        </ul>

    </div>
    <div class="m_btn d-lg-none">
        <div class="icon" data-toggle="collapse" data-target="#navbarMoblie"></div>                        
    </div>                  
</div>
</div>`

header.innerHTML = nav;


function getFooter(){
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