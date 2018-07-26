$(document).ready(() => {

    let counter = 0;
    document.getElementById('counter').innerHTML = counter.toString();

    $('#first .heading .timerCircle').ready(() => {
        setTimeout(() => {
            $('#first .heading .timerCircle .right-mask').css('height', '61px');
            $('#first .heading .timerCircle .right-mask').css('animation', 'drawIndicator 2s');
            let anim = setInterval(() => {
                counter += 1;
                document.getElementById('counter').innerHTML = counter.toString();
                if (counter === 15) {
                    clearInterval(anim);
                }
            }, 100);
        }, 200);
    });
    $(function () {
        $.scrollify(
            {
                section: 'body > section',
                updateHash: false,
                scrollSpeed: 1100,
                easing: "easeOutExpo",
                scrollBars: false,
                before: function () {
                },
                afterRender: function () {
                },
            }
        );
    });


    window.sr = ScrollReveal({
        duration: 500,
        distance: '5vh',
        easing: 'ease-out',
        opacity:0,
        scale: 1.1,
    });

});