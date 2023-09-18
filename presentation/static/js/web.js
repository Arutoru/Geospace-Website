// Zoomer sur le produit en fonction du déplacement de la souris
var products = document.getElementsByClassName("mouseZoom");
var images = document.getElementsByClassName("product-img-top")

for (let i=0, c=images.length; i<c; i++){
  images[i].addEventListener("click", function(){
    Object.values(products).forEach((product, i) => {
      console.log(product);
      product.onmousemove = (event) => {
        var x = event.offsetX;
        var y = event.offsetY;
        product.style.transformOrigin = x + 'px ' + y + 'px';
      };
    });
  }, false);
};

// Définition de la localisation
window.addEventListener("map:init", function (event){
  var map = event.detail.map;
  L.marker([4.055745,9.698625]).addTo(map)
    .bindPopup('Geospace Africa Ltd');
});

// Intervalle de transition carousel
$('.carousel').carousel({
  interval: 4000
})
