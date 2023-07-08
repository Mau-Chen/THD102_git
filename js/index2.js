// 第一段
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




// 第二段
let big_box = document.querySelector('.news_boxb');
console.log(big_box);
let pics = document.getElementsByClassName("pics");
// 定時器
let timer2 = null;
// 當前圖下標
let index = 0;

// 重置函數
function reset() {
    for (let i = 0; i < pics.length; i++) {
        pics[i].className = 'pics';
    }
}
// 選中
function selected() {
    reset();
    pics[index].className = 'pics active';
}
// 輪播
function play() {
    timer2 = setInterval(function () {
        selected();
        index++;
        big_box.style.backgroundImage = 'url(./imges/index/news_p' + index + '.jpg)';
        if (index == 5) {
            index = 0;
        }
    }, 1500);
}
console.log(pics);

// 循環小圖的滑鼠移動
for (let i = 0; i < pics.length; i++) {
    //滑鼠觸發
    pics[i].onmousemove = function () {
        //左圖變當前小圖
        big_box.style.backgroundImage = 'url(./imges/index/news_p' + (i + 1) + '.jpg)';
        //重置函數&關定時器
        reset();
        clearInterval(timer2);
        // 更新當前圖片下標&輪播
        index = i + 1;
        if (index == 5) {
            index = 0;
        }
        play();
    }
}
//輪播
play();


