// 頁籤指定
let btn1 = document.getElementById("anchor1Link");
let btn2 = document.getElementById("anchor2Link");
let btn3 = document.getElementById("anchor3Link");
let btn4 = document.getElementById("anchor4Link");
let btn5 = document.getElementById("anchor5Link");

btn1.addEventListener("click", function () {

    if (btn2.classList.contains("-on")) { // 判斷有無 -on
        btn2.classList.remove("-on"); // 移除 -on
    } else if (btn3.classList.contains("-on")) {
        btn3.classList.remove("-on");
    } else if (btn4.classList.contains("-on")) {
        btn4.classList.remove("-on");
    } else if (btn5.classList.contains("-on")) {
        btn5.classList.remove("-on");
    }
    btn1.classList.add("-on"); // 加上 -on
});

btn2.addEventListener("click", function () {

    if (btn1.classList.contains("-on")) {
        btn1.classList.remove("-on");
    } else if (btn3.classList.contains("-on")) {
        btn3.classList.remove("-on");
    } else if (btn4.classList.contains("-on")) {
        btn4.classList.remove("-on");
    } else if (btn5.classList.contains("-on")) {
        btn5.classList.remove("-on");
    }
    btn2.classList.add("-on");
});

btn3.addEventListener("click", function () {

    if (btn1.classList.contains("-on")) {
        btn1.classList.remove("-on");
    } else if (btn2.classList.contains("-on")) {
        btn2.classList.remove("-on");
    } else if (btn4.classList.contains("-on")) {
        btn4.classList.remove("-on");
    } else if (btn5.classList.contains("-on")) {
        btn5.classList.remove("-on");
    }
    btn3.classList.add("-on");
});

btn4.addEventListener("click", function () {

    if (btn1.classList.contains("-on")) {
        btn1.classList.remove("-on");
    } else if (btn2.classList.contains("-on")) {
        btn2.classList.remove("-on");
    } else if (btn3.classList.contains("-on")) {
        btn3.classList.remove("-on");
    } else if (btn5.classList.contains("-on")) {
        btn5.classList.remove("-on");
    }
    btn4.classList.add("-on");
});

btn5.addEventListener("click", function () {

    if (btn1.classList.contains("-on")) {
        btn1.classList.remove("-on");
    } else if (btn2.classList.contains("-on")) {
        btn2.classList.remove("-on");
    } else if (btn3.classList.contains("-on")) {
        btn3.classList.remove("-on");
    } else if (btn4.classList.contains("-on")) {
        btn4.classList.remove("-on");
    }
    btn5.classList.add("-on");
});

// 選單隱藏/出現
// function position() {
//     return (
//         document.documentElement.scrollTop
//     );
// };

// window.addEventListener("scroll", function (e) {
//     console.log("scrollY: " + window.scrollY);
//     if (window.scrollY === 0) {
//         document.getElementById("SelectText").style.cssText = `display: flex;`;
//     } else {
//         document.getElementById("SelectText").style.cssText = `display: none;`;
//     };
// });
function position() {
    return (
        document.documentElement.scrollTop
    );
};

// 在載入畫面時預設顯示 "SelectText" 元素
document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("SelectText").style.cssText = `display: flex;`;
});

window.addEventListener("scroll", function (e) {
    console.log("scrollY: " + window.scrollY);
    if (window.scrollY === 0) {
        document.getElementById("SelectText").style.cssText = `display: flex;`;
    } else {
        document.getElementById("SelectText").style.cssText = `display: none;`;
    };
});





// 收藏
/* let L1 = document.getElementById("likethis1");
let L2 = document.getElementById("likethis2");
let L3 = document.getElementById("likethis3");

L1.addEventListener("click", function () {
    // console.log("AAA");
    if (L1.classList.contains("-on")) { // 判斷有無 -on
        L1.classList.remove("-on"); // 移除 -on
    }else{
        L1.classList.add("-on"); // 加上 -on
    };
});
L2.addEventListener("click", function () {
    // console.log("AAA");
    if (L2.classList.contains("-on")) { // 判斷有無 -on
        L2.classList.remove("-on"); // 移除 -on
    }else{
        L2.classList.add("-on"); // 加上 -on
    };
});
L3.addEventListener("click", function () {
    // console.log("AAA");
    if (L3.classList.contains("-on")) { // 判斷有無 -on
        L3.classList.remove("-on"); // 移除 -on
    }else{
        L3.classList.add("-on"); // 加上 -on
    };
});



let S1 = document.getElementById("specialLink");

S1.addEventListener("click", function () {
    // console.log("AAA");
    if (S1.classList.contains("-on")) { // 判斷有無 -on
        S1.classList.remove("-on"); // 移除 -on
        document.getElementById("Special").style.cssText = `display: none;`;
    }else{
        S1.classList.add("-on"); // 加上 -on
        document.getElementById("Special").style.cssText = `display: block;`;
    };
});



const cardP = document.querySelector('.pet_block');
const cardInfo = document.querySelector('.card__info');
// const cardInfoIcon = document.querySelector('.pet_block');
const cardParagraph = document.querySelector('.card__paragraph');

cardP.addEventListener('click', function () {
    // cardP.classList.toggle('show');
    if (cardP.classList.contains("show")) { // 判斷有無 -on
        cardP.classList.remove("show"); // 移除 -on
    }else{
        cardP.classList.add("show"); // 加上 -on
    };
});
 */


/*
let L1 = document.getElementById("likethis1");
let petBlock = document.querySelector('.pet_block');

L1.addEventListener("click", function (e) {
    e.stopPropagation(); // 停止冒泡
    e.preventDefault(); // 阻止默認的點擊行為
    if (L1.classList.contains("-on")) {
        L1.classList.remove("-on");
    } else {
        L1.classList.add("-on");
    }
});

let S1 = document.getElementById("specialLink");
let specialElement = document.getElementById("Special");

S1.addEventListener("click", function (e) {
    e.stopPropagation(); // 停止冒泡
    e.preventDefault(); // 阻止默認的點擊行為
    if (S1.classList.contains("-on")) {
        S1.classList.remove("-on");
        specialElement.style.display = "flex";
    } else {
        S1.classList.add("-on");
        specialElement.style.display = "none";
    }
});

const cardP = document.querySelector('.pet_block');

cardP.addEventListener('click', function (e) {
    cardP.classList.toggle("show");
});
*/


// 定義共用的點擊事件函式
function toggleButton(button) {
    button.addEventListener("click", function (e) {
        e.stopPropagation(); // 停止冒泡
        e.preventDefault(); // 阻止默認的點擊行為
        button.classList.toggle("-on");
    });
}

// 取得所有符合條件的按鈕元素並綁定點擊事件
const likeButtons = document.querySelectorAll("[id^='likethis']");

likeButtons.forEach(function (button) {
    toggleButton(button);
});

// 綁定特殊連結的點擊事件
const specialLink = document.getElementById("specialLink");
const specialElement = document.getElementById("Special");

toggleButton(specialLink); // 使用共用的點擊事件函式
specialLink.addEventListener("click", function (e) {
    specialElement.style.display = specialLink.classList.contains("-on") ? "flex" : "none";
});

// 綁定 pet_block 區塊的點擊事件
const petBlock = document.querySelector(".pet_block");
petBlock.addEventListener("click", function (e) {
    petBlock.classList.toggle("show");
});


