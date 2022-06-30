$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        lazyLoad: true,
        margin:0,
        responsiveClass:true,
        dots: false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    })


    // Gets the video src from the data-src on each button

    var $videoSrc;
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    console.log($videoSrc);



    // when the modal is opened autoplay it
    $('#carouselVideo').on('shown.bs.modal', function (e) {

    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#videoPlayer").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" );
    })




    var myModalEl = document.getElementById('carouselVideo')
    myModalEl.addEventListener('hidden.bs.modal', function (event) {
        $("#videoPlayer").attr('src', '');
    })


    // stop playing the youtube video when I close the modal
    $('#carouselVideo').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#videoPlayer").attr('src','');
    })



$('.timepicker').timepicker({
    timeFormat: 'h:mm p',
    interval: 60,
    minTime: '10',
    maxTime: '6:00pm',
    // defaultTime: '11',
    startTime: '10:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
});

$('[data-toggle="datepicker"]').datepicker({
    autoHide: true,
    zIndex: 2048,
  });
//End of Document Ready
})


//VueJS