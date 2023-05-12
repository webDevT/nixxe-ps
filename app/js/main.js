$(function(){

$('.menu-btn').click(function(){
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
})
$('.menu a').click(function(){
    $('.menu-btn').removeClass('active');
    $('.menu').removeClass('active');
})



});