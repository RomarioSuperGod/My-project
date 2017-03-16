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

        if(height  > 0) {
            $("#header").addClass("header");
        }
        else{
            $("#header").removeClass("header");
        }
    });

    $('#form').validate({ // initialize the plugin
            rules: {
                inputName: {
                    required: true,
                    minlength: 5
                },
                inputEmail: {
                    required: true,
                    email: true
                },
                inputTitle: {
                    required: true,
                    minlength: 5
                },
                textArea: {
                    required: true,
                    minlength: 10
                }
            }
        });


    // $('.form').submit(function() {
    //     $('.sendButton').click(function() {
    //         toastr.success('Your message are accepted');
    //     });
    // });

    // $('.sendButton').click(function() {
    //     toastr.success('Your message are accepted');
    // });

    $('.form').submit(function(e) {
        e.preventDefault();
        if($('.form')){
        toastr.success('Your message are accepted');
        }
        else {
            return
        }
    });

});




