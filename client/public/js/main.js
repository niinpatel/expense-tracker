const $ = jQuery;
$(function() {
  $(function() {
    // animsition
    $(".animsition").animsition({
      inClass: "fade-in",
      outClass: "fade-out",
      inDuration: 900,
      outDuration: 900,
      linkElement:
        'a:not([target="_blank"]):not([href^="#"]):not([class^="chosen-single"])',
      loading: true,
      loadingParentElement: "html",
      loadingClass: "page-loader",
      loadingInner: '<div class="page-loader__spin"></div>',
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: ["animation-duration", "-webkit-animation-duration"],
      overlay: false,
      overlayClass: "animsition-overlay-slide",
      overlayParentElement: "html",
      transition: function(url) {
        window.location.href = url;
      }
    });

    // Hamburger Menu
    try {
      $(".hamburger").on("click", function() {
        $(this).toggleClass("is-active");
        $(".navbar-mobile").slideToggle("500");
      });
      $(".navbar-mobile__list li.has-dropdown > a").on("click", function() {
        var dropdown = $(this).siblings("ul.navbar-mobile__dropdown");
        $(this).toggleClass("active");
        $(dropdown).slideToggle("500");
        return false;
      });
    } catch (error) {
      console.log(error);
    }

    // Slider 2
    try {
      $(".js-select2").each(function() {
        $(this).select2({
          minimumResultsForSearch: 20,
          dropdownParent: $(this).next(".dropDownSelect2")
        });
      });
    } catch (error) {
      console.log(error);
    }
  });
});
