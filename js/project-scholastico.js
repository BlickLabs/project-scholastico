function doSomething(e){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-scholastico/index.html"!==window.location.pathname&&"/project-scholastico/"!==window.location.pathname||(e>30?siteNavbar.classList.add("navbar-scroll"):siteNavbar.classList.remove("navbar-scroll"))}function showMenu(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}!function(){$.validator.setDefaults({invalidHandler:function(e,t){var n=$(this);n.find(".form-message").removeClass(n.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var t=$(e).serialize(),n=$(e).find("select, input, textarea, button").not("[disabled]"),a=$(e).find(".form-message"),i=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),r=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),s=function(e){var t=e?i:r;n.removeAttr("disabled"),a.removeClass(e?"error":"success"),a.addClass(e?"success":"error"),a.html(t)};n.attr("disabled","disabled"),a.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:t}).done(function(t){s(1===parseInt(t)),e.reset()}).fail(function(){s(!1)}).always(function(){n.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}();var unitsCard={id1:"img/home/card-urvan.jpg"};$(".home-units-list-content").hover(function(){var e=$(this).parent().parent(),t=e.children(".home-units-card-hover"),n=$(this).data("image");t.children("img").attr("src",unitsCard[n]),t.toggleClass("card-opacity")});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".navbar");window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()});var servicesCarousel=$(".services-carousel");servicesCarousel.owlCarousel({loop:!1,nav:!0,navText:['<img class="scholastico-navigation-arrows" src="img/icons/control-left.png" />','<img class="scholastico-navigation-arrows" src="img/icons/control-right.png" />'],dots:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:2,margin:45,autoWidth:!0}}}),servicesCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='scholastico-navigation-controls'></div>")});