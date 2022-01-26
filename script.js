$(document).ready(function(){
    $(window).scroll(function(){
        if (scrollY > 20) {
            $('.navBar').addClass("sticky");
        } else {
            $('.navBar').removeClass("sticky");
        }
    });

    // toggle menu script 
    $('.menu-btn').click(function(){
        $('.navBar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.navBar .menu a').click(function(){
        $('.navBar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

// typing animation 
var typed = new Typed(".typing",{
    strings: ["Android Developer","Web Developer","Coding Enthusiast","CSE Student","Growing Enterprenur"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed2 = new Typed(".typing2",{
    strings: ["Android Developer","Web Developer","Coding Enthusiast","CSE Student","Enterprenur"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
