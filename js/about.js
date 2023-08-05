// 到指定位置
(function () {
    let d = document;
    function init() {
        //Links
        let anchor1Link = d.getElementById("anchor1Link");
        let anchor2Link = d.getElementById("anchor2Link");
        let anchor3Link = d.getElementById("anchor3Link");
        let anchor1 = d.getElementById("anchor1");
        let anchor2 = d.getElementById("anchor2");
        let anchor3 = d.getElementById("findus_key");

        anchor1Link.addEventListener(
            "click",
            e => {
                scrollTo(anchor1, e);
            },
            false);


        anchor2Link.addEventListener(
            "click",
            e => {
                scrollTo(anchor2, e);
            },
            false);
        anchor3Link.addEventListener(
            "click",
            e => {
                scrollTo(anchor3, e);
            },
            false);
        // console.log(anchor2);
        /*      console.log(
                    "anchor1: " + scrollTopValue(anchor1) + " / " + offsetTopValue(anchor1));
                console.log(
                    "anchor2: " + scrollTopValue(anchor2) + " / " + offsetTopValue(anchor2));
                console.log(
                    "anchor3: " + scrollTopValue(anchor3) + " / " + offsetTopValue(anchor3)); */
        // console.log("AAA");
    }
    function scrollTopValue(domElement) {
        return "scrollTopValue:", domElement.scrollTop;
    }
    function offsetTopValue(domElement) {
        return "offsetTopValue:", domElement.offsetTop;
    }
    var requestAnimFrame = function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            });

    }();
    function scrollTo(to, callback, duration = 1500) {

        if (isDomElement(to)) {
            to = to.offsetTop;
        }
        function move(amount) {
            document.documentElement.scrollTop = amount;
            document.body.parentNode.scrollTop = amount;
            document.body.scrollTop = amount;
        }

        // function position() {
        //     return (
        //         document.documentElement.offsetTop ||
        //         document.body.parentNode.offsetTop ||
        //         document.body.offsetTop);

        // }
        function position() {
            return (
                document.documentElement.scrollTop ||
                document.body.parentNode.scrollTop ||
                document.body.scrollTop);

        }

        let start = position(),
            change = to - start,
            currentTime = 0,
            increment = 20;
        console.log("start:", start); //DEBUG
        console.log("to:", to); //DEBUG
        console.log("change:", change); //DEBUG

        let animateScroll = function () {
            currentTime += increment;
            let val = Math.easeInOutQuad(currentTime, start, change, duration);
            move(val);
            if (currentTime < duration) {
                requestAnimFrame(animateScroll);
            } else {
                if (callback && typeof callback === "function") {
                    callback();
                }
            }
        };

        animateScroll();
    }

    init();
})();

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
        return c / 2 * t * t + b;
    }
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

Math.easeInCubic = function (t, b, c, d) {
    var tc = (t /= d) * t * t;
    return b + c * tc;
};

Math.inOutQuintic = function (t, b, c, d) {
    var ts = (t /= d) * t,
        tc = ts * t;
    return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
};

function isDomElement(obj) {
    return obj instanceof Element;
}

function isMouseEvent(obj) {
    return obj instanceof MouseEvent;
}

function findScrollingElement(element) {
    do {
        if (
            element.clientHeight < element.scrollHeight ||
            element.clientWidth < element.scrollWidth) {
            return element;
        }
    } while (element = element.parentNode);
}




// 頁籤顏色
let btn1 = document.getElementById("anchor1Link");
let btn2 = document.getElementById("anchor2Link");
let btn3 = document.getElementById("anchor3Link");

btn1.addEventListener("click", function () {

    if (btn2.classList.contains("-on")) { // 判斷有無 -on
        btn2.classList.remove("-on"); // 移除 -on
    } else if (btn3.classList.contains("-on")) {
        btn3.classList.remove("-on");
    }
    btn1.classList.add("-on"); // 加上 -on
});

btn2.addEventListener("click", function () {

    if (btn1.classList.contains("-on")) {
        btn1.classList.remove("-on");
    } else if (btn3.classList.contains("-on")) {
        btn3.classList.remove("-on");
    }
    btn2.classList.add("-on");
});

btn3.addEventListener("click", function () {

    if (btn1.classList.contains("-on")) {
        btn1.classList.remove("-on");
    } else if (btn2.classList.contains("-on")) {
        btn2.classList.remove("-on");
    }
    btn3.classList.add("-on");
});

