    // const ReadNow = document.querySelector(".subtitle");
        // document.getElementsByClassName.classList.add("-on");
        // document.getElementsByClassName.classList.remove("-on");
        // window.addEventListener("scroll",function(){
        // });

        // let scrollTop = document.documentElement.scrollTop
        // if(windowHeight + scrollTop == documentHeight){
        //     console.log('AAA');
        // }
        goTo = function (target) {
            var scrollT = document.body.scrollTop || document.documentElement.scrollTop
            if (scrollT > target) {
                var timer = setInterval(function () {
                    var scrollT = document.body.scrollTop || document.documentElement.scrollTop
                    var step = Math.floor(-scrollT / 6);
                    document.documentElement.scrollTop = document.body.scrollTop = step + scrollT;
                    if (scrollT <= target) {
                        document.body.scrollTop = document.documentElement.scrollTop = target;
                        clearTimeout(timer);
                    }
                }, 20)
            } else if (scrollT == 0) {
                var timer = setInterval(function () {
                    var scrollT = document.body.scrollTop || document.documentElement.scrollTop
                    var step = Math.floor(300 / 3 * 0.7);
                    document.documentElement.scrollTop = document.body.scrollTop = step + scrollT;
                    console.log(scrollT)
                    if (scrollT >= target) {
                        document.body.scrollTop = document.documentElement.scrollTop = target;
                        clearTimeout(timer);
                    }
                }, 20)
            } else if (scrollT < target) {
                var timer = setInterval(function () {
                    var scrollT = document.body.scrollTop || document.documentElement.scrollTop
                    var step = Math.floor(scrollT / 6);
                    document.documentElement.scrollTop = document.body.scrollTop = step + scrollT;
                    if (scrollT >= target) {
                        document.body.scrollTop = document.documentElement.scrollTop = target;
                        clearTimeout(timer);
                    }
                }, 20)
            } else if (target == scrollT) {
                return false;
            }
        }

        on(goPs, 'click', function () { goTo(2450) }); //运动到scrolltop值为2450地位置，下面也一样， 运动到指定的位置 
        on(goJob, 'click', function () { goTo(3373) })on(goTel, 'click', function () { buffer.goTo(3373) });
        on(goMe, 'click', function () { buffer.goTo(1539) })on(goHome, 'click', function () { buffer.goTo(0) });
        on(scrollgoOne, 'click', function () { buffer.goTo(2450) }); on(scrollgoPc, 'click', function () { buffer.goTo(2450) });
        on(scrollJob, 'click', function () { buffer.goTo(3373) }); on(scrollMe, 'click', function () { buffer.goTo(1539) });
        on(goTop, 'click', function () { buffer.goTo(0) })

        var scrollTop = document.documentElement.scrollTop;
