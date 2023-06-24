



$(window).scroll(function(){
let scrolOffes = $(window).scrollTop();
if(scrolOffes > aboutOffs -50){

    $('#main-nav').css('backgroundColor'  , 'rgba(0,0,0,.3');
    $('#main-nav').css('padding'  , '0 100px');

    $('#btnIcon').fadeIn();

}
else{
    $('#main-nav').css('backgroundColor'  , 'transparent');
    $('#main-nav').css('padding'  , 0 );

    $('#btnIcon').fadeOut();

}
});

let aboutOffs = $('#about').offset().top;
$('#btnIcon').click(function(){
   //$(window).scrollTop(0);
   $('html, body').animate({scrollTop:0} , 500);
});


$("a[href^='#']").click(function(e){
$(e.target).css('border-bottom' , '5px solid salmon');
$(e.target).parent().siblings().children().css('border-bottom' , 'none');
let hLink = $(e.target).attr('href');

let linktOffs = $(hLink).offset().top;
$('html, body').animate({scrollTop:linktOffs} , 500);

});


/*
$(document).ready(function(){
    $('#loading .sk-cube-grid').fadeOut('2000', function(){
        $('#loading').fadeOut('2000' , function(){
            $('#loading').remove();
            $('body').css('overflow', 'auto');

        })
    });
})*/



window.addEventListener('load', function(){
    $('#loading .sk-cube-grid').fadeOut('2000', function(){
        $('#loading').fadeOut('2000' , function(){
            $('#loading').remove();
            $('body').css('overflow', 'auto');
            new WOW().init();

        })
    });
});

let bgColor = $('.item-color');

bgColor.eq(0).css('backgroundColor' , 'cadetblue');
bgColor.eq(1).css('backgroundColor' , 'salmon');
bgColor.eq(2).css('backgroundColor' , 'darkolivegreen');
bgColor.eq(3).css('backgroundColor' , 'teal');

bgColor.click(function(e){
    let colorInfo =  $(e.target).css('backgroundColor');
    $('h2,h1').css('color' , colorInfo);
    });

    let divWidth = $('#items-color').innerWidth();
$('#setColor').css('left' , `-${divWidth}`);
$('#iii').click(function(){

    if($('#setColor').css('left')=='0px'){

        $('#setColor').animate({left : `-${divWidth}`} , 2000);
    }
    else{
        $('#setColor').animate({left : '0px'} , 2000);

    }
});




var typed = new Typed('#element', {
    strings: ['We Are Professional', 'We Are good'],
    typeSpeed: 50,
    loop: true ,
    showCursor: false,
    startDelay: 50,
    backSpeed: 50,




  });

  particlesJS.load('particles-js', 'assets/particles.json', function() {
    
  });

  