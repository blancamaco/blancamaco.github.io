

(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);


// filtering

const filtering = (filter) => {
  const items = document.querySelectorAll('.project');
  const filtersList = document.querySelectorAll("#filters a");

  items.forEach(item => {
    let categories = item.dataset.category;
    let categoriesArray = categories.split(' '); //array con las categorias del proyecto

    item.style.display = (categoriesArray.includes(filter) || filter == "all") ?
      'inline-flex' :
      'none';
  })

  filtersList.forEach(item => {
    if(item.dataset.category === filter){
      item.classList.add("selected");
    } else {
      item.classList.remove("selected");
    }
  })

}