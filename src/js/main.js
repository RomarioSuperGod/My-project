/**
 * Created by admin on 08.03.2017.
 */
$(document).ready(function () {
    $(".galleryBody").masonry({
        itemSelector: ".item-masonry",
        columnWidth: ".item-masonry"
    });

    $('.item-masonry').hover(
        function () {
            $(this).find('.cover-item-masonry').fadeIn();
        },
        function () {
            $(this).find('.cover-item-masonry').fadeOut();
        }
    );

    // $('.bxslider').bxSlider({
        //     nextSelector: '#slider-next',
        //     prevSelector: '#slider-prev',
        // });

    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false
    });

    $('.label-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: false
    });

});




