
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
    

})

