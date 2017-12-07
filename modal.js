var modalFeature = (function() {
    var setAddToCartButton = function() {
        var cart = document.querySelector('.addToCart');
        cart.addEventListener('click',function() {
            var modal = document.getElementById('myModal');
            var btn = document.getElementById("myBtn");
            var span = document.querySelector(".close");
            modal.style.display = "block";
            addSelectedItem();
            span.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

        });
    };
    var addSelectedItem = function(){
        var modalImage = document.querySelector('.modalImg');
        var product = productImage.selectedProduct();
        modalImage.src = product.large;
    }
    return {
        'setAddToCartButton':setAddToCartButton
    }
})();
