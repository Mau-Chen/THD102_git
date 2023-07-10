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
function position() {
    return (
        document.documentElement.scrollTop
    );
};

window.addEventListener("scroll", function (e) {
    console.log("scrollY: " + window.scrollY);
    if (window.scrollY === 0) {
        document.getElementById("SelectText").style.cssText = `display: flex;`;
    } else {
        document.getElementById("SelectText").style.cssText = `display: none;`;
    };
});


// 收藏
let L1 = document.getElementById("likethis1");
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
/* const cards = document.querySelectorAll(".pet_card");
const cardsContainer = document.querySelector("#cards");
const favoriteIcon = document.getElementById("favMenuItem");

function getCard(element) {
    if (element.classList.contains("card")) {
        return element;
    } else if (element !== document.documentElement) {
        return getCard(element.parentElement);
    }
}

function getButton(element) {
    if (element.tagName === "BUTTON") {
        return element;
    } else if (element !== document.documentElement)
        return getButton(element.parentElement);
}

function getImg(card) {
    if (!(card instanceof Element && card.classList.contains("card"))) return;
    return card.querySelector("img");
}

function appear(card) {
    const id = Math.floor(Math.random() * unsplashIds.length);
    const cardImg = getImg(card);
    const src = `https://source.unsplash.com/${unsplashIds[id]}/240x180`;
    card.classList.remove("card_hidden");
    cardImg.setAttribute("src", src);
}

function reset(card) {
    const cardImg = getImg(card);
    cardImg.setAttribute("src", "");
    cardImg.parentElement.classList.remove("card__image_loaded");
    card.classList.add("card_hidden");
    card.classList.remove("card_favorited");
    setTimeout(() => {
        appear(card);
    }, 400);
}

function like(card) {
    const animationDuration = 1000;
    const distance = getDistance(card, favoriteIcon);
    card.classList.add("card_favorited");
    favoriteIcon.animate([{ transform: "translateZ(700px)", offset: 0.5 }], {
        duration: animationDuration,
        easing: "ease-in-out"
    });
    const animation = card.animate(
        [
            {
                transform: `translate(${distance.x}px, ${distance.y}px) scale(0.2) rotate(-40deg)`
            }
        ],
        { duration: animationDuration / 2, easing: "ease-in" }
    );

    animation.onfinish = () => {
        reset(card);
    };
}


function buttonHandler(event) {
    const card = getCard(event.target);
    const button = getButton(event.target);

    if (!card || !button || !button.dataset) return;
    if (button.dataset.action === "like") like(card);
    if (button.dataset.action === "dislike") dislike(card);
}

function getDistance(elt1, elt2) {
    if (!(elt1 instanceof Element && elt2 instanceof Element))
        throw Error("Illegal use of the function");

    const elt1Bbox = elt1.getBoundingClientRect();
    const elt2Bbox = elt2.getBoundingClientRect();

    return { x: elt2Bbox.x - elt1Bbox.x, y: elt2Bbox.y - elt1Bbox.y };
}

function init() {
    cardsContainer.addEventListener("click", buttonHandler);

    [...cards].forEach((card, index) => {w
        const cardImg = getImg(card);
        cardImg.addEventListener("load", () => {
            cardImg.parentElement.classList.add("card__image_loaded");
        });

        setTimeout(() => {
            appear(card);
        }, 200 + index * 50);
    });
}

window.addEventListener("DOMContentLoaded", init);
 */


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
