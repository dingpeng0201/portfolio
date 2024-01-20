let deviceWidth = document.documentElement.clientWidth;

$(document).ready(function () {
    new WOW().init();

    //糕點圖片變化效果
    fade($("#cheese_cake"));
    fade($("#chocolate_cake"));
    fade($("#orange_pie"));
    fade($("#cinnamon_roll"));
    fade($("#macaron"));
    fade($("#pancake"));

    //Country Code 顯示
    $.get("https://ipinfo.io", function (response) {
        console.log(response.city, response.country);
        $(".location p").html(response.country);
    },
        "jsonp");

    //hamburger button animation
    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {

        $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {

        $('.animated-icon3').toggleClass('open');
    });

    DrawFooterLine();
    if (deviceWidth < 768) {
        $("#coffeeBeanPhone").css("display", "block");
        $("#coffeeBeanTab").css("display", "none");
    }
    else {
        $("#coffeeBeanPhone").css("display", "none");
        $("#coffeeBeanTab").css("display", "block");
        $("#coffeeBazil").removeClass("mask")//.addClass("maskH");
        $("#coffeeSkill").removeClass("mask")//.addClass("maskH");
    }
});

function fade(element) {
    element.mouseenter(function () {
        element.carousel("next");
    });
    element.mouseleave(function () {
        element.carousel("prev");
    });
};

//handle activity when browser resize
window.onresize = function () { 
    deviceWidth = document.documentElement.clientWidth; //update deviceWidth
    if (deviceWidth < 768) {
        DrawFooterLine;   //re-draw footer-line when user resize browser
        $("#coffeeBeanPhone").css("display", "block");
        $("#coffeeBeanTab").css("display", "none");
        $("#coffeeBazil").addClass("mask").removeClass("maskH");
        $("#coffeeSkill").addClass("mask").removeClass("maskH");
    }
    else {
        location.reload();   //refresh all when user resize browser
        $("#coffeeBeanPhone").css("display", "none");
        $("#coffeeBeanTab").css("display", "block");
        $("#coffeeBazil").removeClass("mask")//.addClass("maskH");
        $("#coffeeSkill").removeClass("mask")//.addClass("maskH");
    }
};

//footer 畫綫
function DrawFooterLine(event) {
    let canvas = document.getElementById('line');
    let ctx = canvas.getContext("2d");

    canvas.height = 150;
    canvas.width = 300;

    if (deviceWidth >= 768) {   // draw vertical line in tab or computer webside
        ctx.beginPath()
        ctx.moveTo(280, 20)
        ctx.lineTo(280, 130)
    }
    else {   //draw horizontal line in phone website
        canvas.height = 15;
        ctx.beginPath()
        ctx.moveTo(30, 7)
        ctx.lineTo(260, 7)
    }
    ctx.strokeStyle = "white"
    ctx.stroke()

};

//Scroll to menu part when user click on arrow down (phone page)
$("#home_arrow_down").click(function () {
    $('html, body').animate({
        scrollTop: $("#home_menu").offset().top - $('.navbar').height()
    }, 500);
});

$("#campaign_link").click(function () {
    //Redirect to home page if this link is clicked at another page
    if (!/index.html/.test(window.location.href)) {
        window.location.href = "index.html#Campaign";
    }
    //else scroll to Campaign section
    $('html, body').animate({
        scrollTop: $("#Campaign").offset().top - $('.navbar').height()
    }, 500);
});