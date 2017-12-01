var menuBar = {
    getMenuTitles:function(){
        menuItems = ["COOKWARE", "COOKS' TOOLS", "CUTLEY", "BAKEWARE", "FOOD", "TABLETOP & BAR", "HOMEKEEPING","SALE"];
        return menuItems;
    },
    setMenuCategories: function(menuBar){
        if(!menuBar){
            return false;
        }
        productImage.preloadImage();
        menuTitles = this.getMenuTitles();
        mb = document.querySelector(menuBar);
        for(var i =0; i < menuTitles.length; i++){
            mb.appendChild(this.displayMenuItems(menuTitles[i]));
        }
        productImage.populateGallery();
    },
    addMenuList: function(name){
        var node = document.createElement('LI');
        var textNode = document.createTextNode(name);
        node.appendChild(textNode);
        return node;
    },
    displayMenuItems: function(name){
        var menu = this.addMenuList(name)
        menu.addEventListener("click",function(e){
            menuBar.clearBreadcrumbMenu();
            var link =  e.target;
            console.log(link.innerText);
            menuBar.setBreadcrumbMenuLinks(link.innerText)
        });
        return menu;
    },
    setBreadcrumbMenuLinks: function(linkName){
        if(!linkName){
            return false;
        }
        var bc = document.querySelector('.breadcrumb-menu');
        var capitalizeLink = linkName.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        var link = this.buildBreadcrumbLink(capitalizeLink);
        var arrow = this.createBreadcrumbArrow();
        bc.appendChild(arrow);
        bc.appendChild(link);

    },
    buildBreadcrumbLink:function(name){
        breadcrumb = this.addMenuList(name) ;
        breadcrumb.addEventListener("click",function(e){
            var link =  e.target;
        })
        return breadcrumb;
    },
    clearBreadcrumbMenu: function() {
        var bc = document.querySelector('.breadcrumb-menu');
        var breadcrumbLength = bc.children.length;
        for(var i=breadcrumbLength -1; i > 0 ; i--){
            bc.removeChild(bc.children[i]);
        }
    },
    createBreadcrumbArrow:function() {
        breadcrumbArrow = this.addMenuList(" > ") ;
        breadcrumbArrow.className = 'breadcrumb-menu-arrow';
        return breadcrumbArrow;
    }
};
