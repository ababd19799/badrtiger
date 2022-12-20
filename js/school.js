
$(document).ready(function(){


    // $("html,body").css({'scroll-behavior':'smooth'})


$('#bar1').click(function(){


    // $('#bar1').css({opacity: 0.0, visibility: "hide"}).animate({opacity: 1}, 5000);
    // $("#bar1").hide("slow",function(){$(alert("Welcome to Animitin"))});
    
    $("#bar1-").animate(
    {
     width:'0%'
    },500,
    
    function(){$('#bar2-').animate({width:'40%'},500)

    })    
})


$('#bar2-').click(function(){

    $("#bar2").animate(
    {
     width:'0%'
    },500,
    
    function(){$('#bar1-').animate({width:'40%'},500)})    
})


$('#co-words').click(function()

{
  
    $('.CO-speeking').show(500).css({'width':'0px', 'height': '500px'})
    // $('.CO-speeking').show().fadeIn(3000)
   $('.CO-speeking').animate({
     width:"90%"
   },500)
})

$('.close').click(function(){ 

    $('.CO-speeking').animate({
        width:"0%"
      },500).hide(1000)
  

})

// section for UP
$(function(){
 
let ScrollArrow=$('.Up');

 $(window).scroll(function(){

    // console.log(window.ScrollTop())

    //  window.console.log(window.scrollY);
    // console.log("X=",window.pageYOffset)
  if ($(this).scrollTop() >=200 )
  {
    ScrollArrow.css({
        display:'block'

    });

  }
  else 
  {
    ScrollArrow.css({
        display:'none'

    });
  }

 })
 
 $('.Up').click(function(){

    $("html,body").animate({scrollTop:0},1500)

 })

//  $('.dropdown-content').animate({height:240},3000)

})

})