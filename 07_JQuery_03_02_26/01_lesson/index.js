
$("#btn").click(function(){
  $("#demo").text("Text Changed")
  $("#demo").css({
    color:"red",
    background:"black"
  })
})
$("#searchInput").on("keyup", function () {
  let value = $(this).val().toLowerCase();

  $("#productList li").filter(function () {
    $(this).toggle(
      $(this).text().toLowerCase().includes(value)
    );
  });
});


$("#btn").click(function(){

    $(this).toggleClass("active")

    $(this).next(".answer").slideToggle(300)
});