//image Object
var productImage = {
    getImages: [
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
    ],
    preloadImage: function(){
        //preLoad images for caching
        var images = this.getImages
        images.forEach(function(imagePath){
            var imgLg = document.createElement('IMG');
            var imgSm = document.createElement('IMG');
            imgLg.src = imagePath.large;
            imgSm.src = imagePath.small;
        });
    },
    addGalleryImage: function(imgLg, imgSm){
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
    },
    populateGallery:function() {
        var gallery = document.querySelector('.gallery > ul');
        this.getImages.forEach(function(img){
            gallery.appendChild(productImage.addGalleryImage(img.large, img.small))
        });
    }
};
