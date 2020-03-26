$(function(){
     
    //redimensionamento do slide

var width = parseInt($('body').css('width'));
var height = parseInt((width/3));
var btns = parseInt((height-50)/2);


$('.slider').css({'height':+height+'px'});
$('.container-slid').css({'height':+height+'px'});

$('.slider .slider_item').css({'height':+height+'px'});
$('.slider-next,.slider-prev').css({'margin-top':+btns+'px'});

$(window).resize(function() {
var width = parseInt($('body').css('width'));
var height = parseInt((width/3));
var btns = parseInt((height-50)/2);

$('.slider').css({'height':+height+'px'});
$('.container-slid').css({'height':+height+'px'});

$('.slider .slider_item').css({'height':+height+'px'});
$('.slider-next,.slider-prev').css({'margin-top':+btns+'px'});
});


// AVANÃ‡A PARA O PRÃ“XIMO SLIDE
var nextSlider = function(){
if($('.slider_item.active').next('.slider_item').size()){
 $('.slider_item.active').each(function(){
     $(this).next('.slider_item').addClass('active');
     $(this).removeClass('active');
 });
 
}else{
 $('.slider_item.active').each(function(){
     $('.slider_item').removeClass('active');
     $('.slider_item:eq(0)').addClass('active');
 });
}
}

// VOLTA PARA O SLIDE ANTERIOR
var prevSlider = function(){
 if($('.slider_item.active').index() > 0){
     $('.slider_item.active').each(function(){
         $(this).prev('.slider_item').addClass('active');
         $(this).removeClass('active');
     });

 }else{
     $('.slider_item.active').each(function(){
         $('.slider_item').removeClass('active');
         $('.slider_item:last-of-type').addClass('active');
     });
 }
}

// INICIALIZAÃ‡ÃƒO AUTOMÃTICA DO SLIDE
var sliderAuto = setInterval(nextSlider, 5000);

$('.slider_content,.slider-next, .slider-prev').hover(function(){
 clearInterval(sliderAuto);
},function(){
 sliderAuto = setInterval(nextSlider, 5000);			
});


// REINICIALIZAÃ‡ÃƒO DO SLIDE
$('.slider_content').click(function(){
$('.slider_item.active').each(function(){
         $('.slider_item').removeClass('active');
         $('#reset-carrosel').addClass('active');
});
});


//AÃ‡Ã•ES DE AVANÃ‡AR E VOLTAR SLIDE
$('.slider-next').click(function(event){
 event.preventDefault();
 nextSlider();
});

$('.slider-prev').click(function(event){
 event.preventDefault();
 prevSlider();
});


});
