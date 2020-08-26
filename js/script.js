function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

        // burger buttons 

$(document).ready(function() {
    $('.burger,.menu-mobile__close').click(function(event) {
        $('.burger,.menu-mobile__nav,.menu-mobile__market,.menu-mobile__close').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.language__ru').click(function(event) {
        $('.language__ru, .ru').addClass('active');
        $('.language__eng, .eng').removeClass('active');
    });
    $('.language__eng').click(function(event) {
        $('.language__ru, .ru').removeClass('active');
        $('.language__eng, .eng').addClass('active');
    });
});

function age(){
    var diff_ms = Date.now() - (new Date(1991, 5, 28)).getTime();
    var age_dt = new Date(diff_ms); 
    var my_age = Math.abs(age_dt.getUTCFullYear() - 1970).toString();
    document.write (my_age);
}
;
