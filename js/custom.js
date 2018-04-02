// resposive top navbar
function myFunction(){
    $('.tog').click(function(){
        $('.navbar').toggle();
    });  
}

//Initialize the slider
    
    $(document).ready(function () {
        $('.bxslider').bxSlider(); 
    });
// add and remove class (active)
    $('li a').click(function () {
        $('li a.active').removeClass('active');
        $(this).closest('a').addClass('active');
    });
// scroll
$(document).scroll(function(){
	$('nav').css('background-color','#333');
});

// Html animate
    $('nav li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 2000);
        console.log($(this).data('value'));
    });

// up button
     // When the user scrolls down 20px from the top of the document, show the button
    var myBtn = document.getElementById('btn');
    
    window.onscroll = function scrollFunction() {
        
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            myBtn.style.display = "block";
        } else {
            myBtn.style.display = "none";
        }
    };
    // When the user clicks on the button, scroll to the top of the document
    myBtn.onclick = function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        $('li a').removeClass('active');
        $('li a').first().addClass('active');
    };