/* 
document.querySelectorAll('.s_button')[1].onclick = () => {
    let lists = document.querySelectorAll('.item');
    document.querySelector('#slide').appendChild(lists[0]);
}

document.querySelectorAll('.s_button')[0].onclick = () => {
    let lists = document.querySelectorAll('.item');
    document.querySelector('#slide').prepend(lists[lists.length - 1]);
} */


/* let _direction = true;
let _move = () => {
    let lists = document.querySelectorAll('.item');
    if (_direction) {
        document.querySelector('#slide').appendChild(lists[0]);
    } else {
        document.querySelector('#slide').prepend(lists[lists.length - 1]);
    }
}


let timer = setInterval(_move, 3000);
document.querySelector('.container').addEventListener('mouseover', () => {
    clearInterval(timer);
});

document.querySelector('.container').addEventListener('mouseout', () => {
    timer = setInterval(_move, 3000);
});


document.querySelectorAll('.s_button')[1].onclick = () => {
    _direction = true;
    _move();
}

document.querySelectorAll('.s_button')[0].onclick = () => {
    _direction = false;
    _move();
} */






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
        big_box.style.backgroundImage = 'url(imges/index/news_p' + index + '.jpg)';
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
        big_box.style.backgroundImage = 'url(imges/index/news_p' + (i + 1) + '.jpg)';
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


// ../imges/index/news_p1.jpg


let current = 0;
let items = document.querySelectorAll(".header__img");
console.log(items);

const handleRight = () => {
  items[current].style.animation = "hideRight 1.5s forwards";
  items[current >= items.length - 1 ? 0 : current + 1].style.animation =
    "showRight 1.5s forwards";
  if (current < items.length - 1) {
    current++;
  } else {
    current = 0;
  }
};

const handleLeft = () => {
  items[current].style.animation = "hideLeft 1.5s forwards";
  items[current > 0 ? current - 1 : 2].style.animation =
    "showLeft 1.5s forwards";
  if (current > 0) {
    current--;
  } else {
    current = 2;
  }
};
const getSliderHeight = () => {
  document.querySelector(".wrapper").style.height =
    document.querySelector(".header__img").clientHeight + "px";
};
window.onresize = getSliderHeight;
getSliderHeight();
    





const header = document.querySelector(".wrapper");
const headerBox = document.querySelector(".header__box");
const headerImages = document.querySelectorAll(".header__img");

//VARIABLES FOR CAROUSEL
const carouselSpeed = 3000;
let headerWidth = header.clientWidth;

//FUNCTION THAT CHANGES IMAGES IN CAROUSEL
const changeImage = () => {
  headerBox.style.transform = `translateX(-${headerWidth}px)`;
};

//FUNCTION THAT HANDLES CAROUSEL
const handleCarousel = () => {
  changeImage();
};

//FUNCTION THAT APPENDS ELEMENT TO HEADER BOX AND MAKES CAROUSEL INFINITE
const infiniteCarousel = () => {
  headerBox.appendChild(headerBox.firstElementChild);

  headerBox.style.transition = `none`;
  headerBox.style.transform = `translateX(0)`;
  setTimeout(function () {
    headerBox.style.transition = `transform 0.5s`;
  });
};

//FUNCTIONS CALLINGS
changeImage();
headerBox.addEventListener("transitionend", infiniteCarousel);
setInterval(handleCarousel, carouselSpeed);
