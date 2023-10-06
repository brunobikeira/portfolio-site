$(".menu-burger").click(function () {
    $("header").toggleClass("open");
    $("body").toggleClass("overflow-hidden");
    $("body").toggleClass("menu-open"); // Add or remove the "menu-open" class to <body>
  });
  
  // Add a click event listener to all menu links
  $(".menu-item a").click(function (e) {
    var target = $(this).attr("href");
  
    if (target.startsWith("#")) {
      // Internal anchor link
      e.preventDefault();
  
      $("header").removeClass("open");
      $("body").removeClass("overflow-hidden");
      $("body").removeClass("menu-open"); // Remove the "menu-open" class
  
      if (window.location.pathname !== target) {
        window.location.href = target;
      } else {
        var offset = $(target).offset().top;
        $("html, body").animate({ scrollTop: offset }, 800);
      }
    } else {
      // External link - allow it to work as usual
      // The code will not prevent default behavior for external links
    }
  });

// Function to check if the user has scrolled past one screen height
function isPastOneScreenHeight() {
    var scrollPosition = $(window).scrollTop();
    var screenHeight = $(window).height();
    return scrollPosition > screenHeight;
  }
  
  // Add a scroll event listener
  $(window).scroll(function () {
    if (isPastOneScreenHeight()) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });