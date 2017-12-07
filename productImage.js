var productImage = (function(){
    var getImages = function(){
    return [
            a = {
                large:"assets/product-large-a.jpg",
                small:"assets/product-small-a.jpg"
            },
            b = {
                large:"assets/product-large-b.jpg",
                small:"assets/product-small-b.jpg"
            },
            c = {
                large:"assets/product-large-c.jpg",
                small:"assets/product-small-c.jpg"
            },
            d = {
                large:"assets/product-large-d.jpg",
                small:"assets/product-small-d.jpg"
            }
        ];
    };
    var preloadImages = function(){
        //preLoad images for caching
        var images = getImages();
        images.forEach(function(imagePath){
            var imgLg = document.createElement('IMG');
            var imgSm = document.createElement('IMG');
            imgLg.src = imagePath.large;
            imgSm.src = imagePath.small;
        });
    };
    var addGalleryImage= function(imgLg, imgSm){
        var bigImage = document.querySelector('.bigImage');
        var liNode = document.createElement('LI');
        var imgNode = document.createElement('IMG');
        imgNode.src =imgSm;
        imgNode.setAttribute('data',imgLg);
        imgNode.addEventListener("click",function(e){
            bigImage.src = e.target.attributes['data'].value;
        });
        liNode.appendChild(imgNode);
        return liNode;
    };
    var populateGallery=function() {
        var gallery = document.querySelector('.gallery > ul');
        var images = getImages()
        images.forEach(function(img){
            gallery.appendChild(addGalleryImage(img.large, img.small))
        });
    };
    var selectedProduct = function(){
        var selected = document.querySelector('.bigImage');
        var images = getImages();

        for(var i = 0; i < images.length; i++){
            if(images[i].large == 'assets/' + selected.src.split('/').pop()){
                return images[i];
            }
        };
    }
    return{
        'preloadImages':preloadImages,
        'populateGallery':populateGallery,
        'selectedProduct':selectedProduct
    }
})();
