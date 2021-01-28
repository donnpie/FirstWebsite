$(document).ready(function(){
    //create the dropdown menu on the home button
    $('.nav ul li').hover(function(){
            $(".dropdown-menu", this).slideDown(1000); 
        });
    $('.nav ul li').mouseleave(function (){
        $(".dropdown-menu", this).slideUp(1000); 
    });
    
    //fade in / out icon after page loads
    $('.logo-container').fadeOut(300).fadeIn(700);
    
    //Show the welcome section
    $("#welcome").hide().show(1000);
    
    //Animate subscribe form - mouseenter
    let imageUrl = './img/jan-huber-4OhFZSAT3sw-unsplash.jpg';
    $('#subscribe').mouseenter(function (){
        $(this).css('background-image', 'url(' + imageUrl + ')');
        $(this).css('opacity', '0');
        $(this).animate({opacity: 1}, 1000);
    });
    
    //Animate subscribe form - mouseleave
    $('#subscribe').mouseleave(function (){
        $(this).css('background-image', 'none');
    });
});//ready