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
  var touch = $('#touch-menu');
  var menu = $('.menu');

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

  const themeModeBtn = document.querySelector("#theme-mode");
  const theme = document.querySelector("#theme-css");
  const theme_dir = "https://cdn.jsdelivr.net/gh/ahmadalkhatib1/website/Themes/Anime-Online-Theme/";
  function applySavedTheme() {
    const cookies = document.cookie.split(';');
    const themeCookie = cookies.find(c => c.includes('thememode='));
    const themeMode = themeCookie ? themeCookie.split('=')[1] : 'dark';

    if (themeMode === 'light') {
      theme.href = theme_dir + "/css/light-styles.css";
      $("#theme-mode-icon").attr("class", "far fa-moon");
      $("#lucodeia-error-img").attr("src", theme_dir + "/images/404.png");
      $("#lucodeia-no-contents-img").attr("src", theme_dir + "/images/no-contents.png");
    } else {
      theme.href = theme_dir + "/css/dark-styles.css";
      $("#theme-mode-icon").attr("class", "fas fa-sun");
      $("#lucodeia-error-img").attr("src", theme_dir + "/images/404-dark.png");
      $("#lucodeia-no-contents-img").attr("src", theme_dir + "/images/no-contents-dark.png");
    }
  }
  document.addEventListener('DOMContentLoaded', applySavedTheme);
  themeModeBtn.addEventListener("click", function() {
    const currentTheme = theme.href.includes('dark-styles.css') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.cookie = `thememode=${newTheme}`;
    applySavedTheme();
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
