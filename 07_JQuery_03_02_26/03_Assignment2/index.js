$(".question").click(function () {

      
      $(this).toggleClass("active");

      
      $(this).next(".answer").slideToggle(300);

    });