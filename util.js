var menuItems = ['COOKWARE', 'COOKS'/' TOOLS', 'CUTLEY'];

var footer = {

    displayFooter:function(){

    }
}

 var menuBar = {

        getMenuTitles:function(){
            return menuItems
        },
        setMenuCategories: function(menuBar){
            if(!menuBar){
                return false;
            }

            menuTitles = this.getMenuTitles();
            mb = document.querySelector(menuBar)
            for(var i =0; i < menuItems.length; i++){
                mb.appendChild(menuBar.buildMenuBoxes(menuItems[i]));
            }
        },
        buildMenuBoxes: function(name){
            return "<div class='menuItem'>" + name + "</div>"

        },
        renderMenuCategoryItemPullDown:function(){

        },
        populateCategoryItems: function(){

        },
        displayBreadcrumbMenu:function(){

        }
}


var shoppingCart ={

        renderShopingCart:function(){

        },
        addItemsToShoppingCart:function(){

        },
        displaySmallImage:function(){

        },
        displayLargeImage:function(){

        }

}


var navigation ={


}


var pageBody ={


}

var utils = {

        renderModalWindow:function(){

        },
        expandArrow:function(){

        },
        closeSection:function(){

        }
}