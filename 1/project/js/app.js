
displayNone();
$(".home").css("display","inline-block");

let currentScreenWidth = window.innerWidth;
function displayNone(){
    $(".home").css("display","none");
    $(".about").css("display","none");
    $(".work").css("display","none");
    $(".contact").css("display","none");
}
$(".home-nav-link").click(function () {
    $(".home").slideDown(1000);
    $(".about").animate({
        opacity: 0
    });
    $(".work").css("z-index","-2");
    $("html").css("overflow","hidden");
    $(".nav-link").removeClass("active");
    $(".nav-link.home-nav-link").addClass("active");
    displayNone();
    $(".home").css("display","inline-block");
})

$(".about-nav-link").click(function () {
    $(".home").slideUp(1000);
    $(".about").animate({
        opacity: 1
    });
    $(".work").animate({
        opacity: 0
    });
    $(".work").css("z-index","-2");
    $('.contact').css("z-index","-3");

    displayNone();
    $(".about").css("display","inline-block");

    $("html").css("overflow-y","auto");
    $("html").css("overflow-x","hidden");
    $("0")
    $(".nav-link").removeClass("active");
    $(".nav-link.about-nav-link").addClass("active");
    displayNone();
    $(".about").css("display","inline-block");
})

$(".work-nav-link").click(function () {
    $(".home").slideUp(1000);
    $(".work").animate({
        opacity: 1
    });
    $(".work").css("z-index","-1");
    $('.contact').css("z-index","-2");

    displayNone();
    $(".work").css("display","inline-block");

    $("html").css("overflow","hidden");
    $(".nav-link").removeClass("active");
    $(".nav-link.work-nav-link").addClass("active");
})

$(".contact-nav-link").click(function () {
    $(".home").slideUp(1000);
    $(".about").animate({
        opacity: 0
    });
    $(".work").css("z-index","-2");
    $(".contact").animate({
        opacity: 1
    })

    displayNone();
    $(".contact").css("display","inline-block");

    $('.contact').css("z-index","-1");
    $(".nav-link").removeClass("active");
    $(".nav-link.contact-nav-link").addClass("active");
    if(currentScreenWidth < 500){
        // console.log("HELLO");
        $("html").css("overflow-y","auto");
    }else{
        $("html").css("overflow-y","hidden");
    }
})

$(".btnToNext").click(function () {
    $(".home").slideUp(1000);
    $(".about").animate({
        opacity: 1
    });
    $(".work").animate({
        opacity: 0
    });
    $(".work").css("z-index","-2");
    $('.contact').css("z-index","-3");

    displayNone();
    $(".about").css("display","inline-block");

    $("html").css("overflow-y","auto");
    $("html").css("overflow-x","hidden");
    $(".nav-link").removeClass("active");
    $(".nav-link.about-nav-link").addClass("active");
});

$(".btnToNext2").click(function () {
    $("#about1").slideUp(1000);
});

$(".pb1").animate({
    width: "75%"
},1200)
$(".pb2").animate({
    width: "65%"
},1000)
$(".pb3").animate({
    width: "89%"
},1500)
$(".pb4").animate({
    width: "40%"
},800)
$(".pb5").animate({
    width: "25%"
},500)
$(".pb6").animate({
    width: "42%"
},850)
$(".pb7").animate({
    width: "35%"
},700)

var typed = new Typed('.animatedTyping', {
    strings: ["I AM ZAYAR LINN NAUNG !", "Front-End Developer","Let's change to digital world"],
    typeSpeed: 80,
    backSpeed: 20,
    backDelay: 500,
    cursorChar: "",
    loop: true
});
var waypoints = $('#home').waypoint(function(direction) {
    $("html").css("overflow","hidden");
}, {
    offset: '25%'
})