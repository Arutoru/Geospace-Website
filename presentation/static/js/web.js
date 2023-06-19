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
