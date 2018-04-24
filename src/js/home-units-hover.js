var unitsCard = {
  id1: "img/home/card-urvan.jpg"
}

$(".home-units-list-content").hover( function(){
  var cardContainer = $(this).parent().parent();
  var imageContainer =  cardContainer.children('.home-units-card-hover');
  var imageId = $(this).data("image");
  var imageElem = imageContainer.children('img');
  imageElem.attr("src", unitsCard[imageId]);
 imageContainer.toggleClass("card-opacity");
});
