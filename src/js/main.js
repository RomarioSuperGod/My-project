/**
 * Created by admin on 08.03.2017.
 */
$(document).ready(function () {
    // $(".galleryBody").masonry({
    //     itemSelector: ".item-masonry",
    //     columnWidth: ".item-masonry"
    // });


    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        wrapAround: true
    });

    $('.label-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
    });

    $('.blog-carousel').flickity({
        cellAlign: 'left',
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true
    });

    $(window).scroll(function () {
        var height = $(window).scrollTop();

        if (height > 0) {
            $(".home-page-header").addClass("header");
        }
        else {
            $(".home-page-header").removeClass("header");
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
            },
            postArea: {
                required: true
            }
        },
        submitHandler: function () {
            toastr.success('Your information are accepted');
            $('.form').get(0).reset();
        }
    });

    $('#dataTable').DataTable({
        "ajax": "/json/dataTable.json",

        "columns": [
            {"data": "Name"},
            {"data": "Date"},
            {"data": "Email"},
            {"data": "City"},
            {"data": "Personal Number"}
        ]
    });


    $('#simple-menu').sidr();
    $(window).resize(function () {
        if ($(window).width() <= 750) {
            showMobileMenu();
            $("#simple-menu").css("display", "block");
        }
        else if ($(window).width() >= 750) {
            $("#sidr").removeClass("sidr left");
            $("#simple-menu").css("display", "none");
        }
    });
    //check screen width
    if ($(window).width() <= 750) {
        showMobileMenu();
        $("#simple-menu").css("display", "block");
    } else {
        $("#sidr").removeClass("sidr left");
        $("#simple-menu").css("display", "none");
    }


    function showMobileMenu() {
        $('#simple-menu').sidr({
            side: "right"
        });
    }

    //google maps
    $('.googleMap').click(function () {
        $('.googleMap iframe').css("pointer-events", "auto");
    });

    $(".googleMap").mouseleave(function () {
        $('.googleMap iframe').css("pointer-events", "none");
    });

});




