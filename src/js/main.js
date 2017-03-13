/**
 * Created by admin on 08.03.2017.
 */
$(document).ready(function () {
    $(".galleryBody").masonry({
        itemSelector: ".item-masonry",
        columnWidth: ".item-masonry"
    });


    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        wrapAround: true
    });

    $('.label-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
    });

    $('.blog-carousel').flickity({
        // options
        cellAlign: 'left',
        // contain: true,
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true
    });

    $(window).scroll(function() {
        var height = $(window).scrollTop();

        if(height  > 10) {
            $("#header").addClass("header");


            // $("header").css({"background" : "white"});
        }
        else{
            // $("header").css({"background" : "none"});
            $("#header").removeClass("header");
        }
    });
});




