
$(window).scroll(function () {
   

    let scroll = $(window).scrollTop();
  
    $(".layer1").css({
        width: (100 + scroll / 5) + "%"
    })
    $('.layer2').css({
        width: (100 + scroll / 5) + "%",
        left: scroll / 50 + "%"
    })
    $('.text').css({

        top: - scroll / 20 + "%"
    })
    

});

// let layer1 =document.querySelector(".layer1")
// scroll = window.pageYOffset;
// document.addEventListener("scroll", 
    
// function (e){
//     let offset = window.pageYOffset;
//     scroll = offset;
//     layer1.style.width = (100 + scroll/5) + "%";
// });

// let layer2 =document.querySelector(".layer2")
// scroll = window.pageYOffset;
// document.addEventListener("scroll", function (e){
//     let offset = window.pageYOffset;
//     scroll = offset;
//     layer2.style.width = (100 + scroll/5) + "%";
//     layer2.style.left = scroll/50 + "%";
// })

// let text =document.querySelector(".text")
// scroll = window.pageYOffset;
// document.addEventListener("scroll", function (e){
//     let offset = window.pageYOffset;
//     scroll = offset;
//     layer2.style.width = (100 + scroll/5) + "%";
//     layer2.style.left = scroll/-20 + "%";
// })

$(function () {
    $('.chart').easyPieChart({
        barColor: '#00a8e0',
        lineWidth: 7,
        scaleLength: 0,
        trackColor: '#92e7d4'
    });
});


(function(){

    var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });
})(jQuery);
