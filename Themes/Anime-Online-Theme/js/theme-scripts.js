$(document).ready(function(){
    
    $('[data-toggle="popover"]').popover({ html : true, container: 'body'});   
	
    // Search
    $("#showSearch").click(function(){
        $("#searchContent").fadeToggle();
    });
    $("#hideSearch").click(function(){
        $("#searchContent").fadeToggle();
    });
    
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
	});
    
    // Main Menu
    var touch 	= $('#touch-menu');
    var menu 	= $('.menu');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 767 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
    
    // Stop Video when navigating with tab
    $('#episode-watch-content a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var iframe = $(e.relatedTarget.hash).find('iframe'); 
        var src = iframe.attr('src');
        iframe.attr('src', '');
        iframe.attr('src', src);
    });
    
    //watch-fansubs-option
    $('.watch-fansubs-option a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var iframe = $(e.relatedTarget.hash).find('iframe'); 
        var src = iframe.attr('src');
        iframe.attr('src', '');
        iframe.attr('src', src);
    });

    // Switch Servers
    $('#episode-servers li a').click(function (e) {
        var parentEl = e.target.parentNode;
        var serverUrl = e.target.getAttribute('data-ep-url');
        var teamIDContainer = $(e.target).closest('.hardsub-content').parent().attr('id');
        $('#'+teamIDContainer+'-episode-iframe').attr('src', '');
        $('#' + teamIDContainer + ' li').removeClass('active');
        $(parentEl).addClass('active');
        $('#'+teamIDContainer+'-episode-iframe').attr('src', serverUrl);
    });

    // Slider
    if($('.owl-carousel-lucodeia-slider').length > 0){
        $('.owl-carousel-lucodeia-slider').owlCarousel({
            rtl: true,
            loop:true,
            margin:0,
            nav:false,
            autoplay: true,
            dots: true,
            items: 1
        });
    }
    
    if($('.owl-animes').length > 0){
        $('.owl-animes').owlCarousel({
            rtl:true,
            loop:false,
            navText: ['<i class="fas fa-chevron-right"></i>','<i class="fas fa-chevron-left"></i>'],
            margin:8,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                    nav:true
                },
                600:{
                    items:4,
                    nav:false
                },
                1000:{
                    items:6,
                    nav:true
                }
            }
        });
    }
    
    if($('.owl-episodes').length > 0){
        $('.owl-episodes').owlCarousel({
            rtl:true,
            loop:false,
            navText: ['<i class="fas fa-chevron-right"></i>','<i class="fas fa-chevron-left"></i>'],
            margin:8,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                    nav:true
                },
                600:{
                    items:4,
                    nav:false
                },
                1000:{
                    items:6,
                    nav:true
                }
            }
        });
    }
    
    if($('.owl-pin-episodes').length > 0){
        $('.owl-pin-episodes').owlCarousel({
            rtl:true,
            loop:false,
            navText: ['<i class="fas fa-chevron-right"></i>','<i class="fas fa-chevron-left"></i>'],
            margin:4,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:4,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:true
                }
            }
        });
    }
    
    if($('.owl-carousel-posts').length > 0){
        $('.owl-carousel-posts').owlCarousel({
            rtl:true,
            loop:false,
            navText: ['<i class="fas fa-chevron-right"></i>','<i class="fas fa-chevron-left"></i>'],
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:true
                }
            }
        });
    }

    const themeModeBtn = document.querySelector("#theme-mode");
    const theme = document.querySelector("#theme-css");
    themeModeBtn.addEventListener("click", function() {
        let filename = theme.href.split("/").pop().split("?").shift();
        let themeMode = "dark";
        let theme_dir = "https://cdn.jsdelivr.net/gh/ahmadalkhatib1/website/Themes/Anime-Online-Theme/";
        if(filename == "dark-styles.css"){
            theme.href = theme_dir + "/css/light-styles.css";
            $("#theme-mode-icon").attr("class", "far fa-moon");
            $("#lucodeia-error-img").attr("src", theme_dir + "/images/404.png");
            $("#lucodeia-no-contents-img").attr("src", theme_dir + "/images/no-contents.png");
            themeMode = "light";
        }else{
            theme.href = theme_dir + "/css/dark-styles.css";
            $("#theme-mode-icon").attr("class", "fas fa-sun");
            $("#lucodeia-error-img").attr("src", theme_dir + "/images/404-dark.png");
            $("#lucodeia-no-contents-img").attr("src", theme_dir + "/images/no-contents-dark.png");
            themeMode = "dark";
        }
        document.cookie = "thememode=" + themeMode;
    });


});


function getFilteredEpisode() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('inputEpisode');
    filter = input.value.toUpperCase();
    ul = document.getElementById("DivEpisodesList");
    li = ul.getElementsByClassName('DivEpisodeContainer');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function getFilteredEpisodePage() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('inputEpisode');
    filter = input.value.toUpperCase();
    ul = document.getElementById("ULEpisodesList");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Scroll Bar
(function($){
$(window).load(function(){
  /* initialize scrollbar */
    if($('#scroll-episodes').length > 0){
        $("#scroll-episodes").mCustomScrollbar({
            theme:"dark-3",
            scrollButtons:{enable:true}
        });
    }
  /* insert twitter widget js in window load fn */
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
});
})(jQuery);

(function($){
$(window).load(function(){
  /* initialize scrollbar */
    if($('.scroll-episodes-list').length > 0){
        $(".scroll-episodes-list").mCustomScrollbar({
            theme:"dark-3",
            scrollButtons:{enable:true}
        });
    }
  /* insert twitter widget js in window load fn */
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
});
})(jQuery);
