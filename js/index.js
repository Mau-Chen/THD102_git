/* 
document.querySelectorAll('.s_button')[1].onclick = () => {
    let lists = document.querySelectorAll('.item');
    document.querySelector('#slide').appendChild(lists[0]);
}

document.querySelectorAll('.s_button')[0].onclick = () => {
    let lists = document.querySelectorAll('.item');
    document.querySelector('#slide').prepend(lists[lists.length - 1]);
} */


let _direction = true;
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
}





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
        big_box.style.backgroundImage = 'url(../imges/index/news_p' + index + '.jpg)';
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
        big_box.style.backgroundImage = 'url(../imges/index/news_p' + (i + 1) + '.jpg)';
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