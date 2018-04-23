var unitsCard = {
  id1: "img/home/card-urvan.jpg"
}

//var unitsImage = document.querySelector(".home-units-card-img").src = unitsCard.id1;
var unitContainer = document.querySelector(".home-units-card");
var unitItem = document.querySelector('.home-units-list-content').toggle;

$(".home-units-list-content").hover( function(){
  var cardContainer = $(this).parent().parent();
  var imageContainer =  cardContainer.children('.home-units-card-hover');
  var imageId = $(this).data("image");
  var imageElem = imageContainer.children('img');
  imageElem.attr("src", unitsCard[imageId]);
 imageContainer.toggleClass("card-opacity");
});
