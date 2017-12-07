var menuBar = (function(){
    getMenuTitles = function(){
        menuItems = ["HOME","COOKWARE", "COOKS' TOOLS", "CUTLEY", "BAKEWARE", "FOOD", "TABLETOP & BAR", "HOMEKEEPING","SALE"];
        return menuItems;
    };
    setMenuCategories =  function(menuBar){
        if(!menuBar){
            return false;
        }
        menuTitles = getMenuTitles();
        mb = document.querySelector(menuBar);
        for(var i =0; i < menuTitles.length; i++){
            mb.appendChild(displayMenuItems(menuTitles[i]));
        }
    };
    addMenuList = function(name){
        var node = document.createElement('LI');
        var textNode = document.createTextNode(name);
        node.appendChild(textNode);
        return node;
    };
    displayMenuItems = function(name){
        var menu = addMenuList(name)
        menu.addEventListener("click",function(e){
            clearBreadcrumbMenu();
            var link =  e.target;
            console.log(link.innerText);
            setBreadcrumbMenuLinks(link.innerText)
        });
        return menu;
    };
    setBreadcrumbMenuLinks =  function(linkName){
        if(!linkName){
            return false;
        }
        var bc = document.querySelector('.breadcrumb-menu');
        var capitalizeLink = linkName.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        var link = buildBreadcrumbLink(capitalizeLink);
        var arrow = createBreadcrumbArrow();
        bc.appendChild(arrow);
        bc.appendChild(link);

    };
    buildBreadcrumbLink = function(name){
        breadcrumb = addMenuList(name) ;
        breadcrumb.addEventListener("click",function(e){
            var link =  e.target;
        })
        return breadcrumb;
    };
    clearBreadcrumbMenu =  function() {
        var bc = document.querySelector('.breadcrumb-menu');
        var breadcrumbLength = bc.children.length;
        for(var i=breadcrumbLength -1; i > 0 ; i--){
            bc.removeChild(bc.children[i]);
        }
    };
    createBreadcrumbArrow = function() {
        breadcrumbArrow = addMenuList(" > ") ;
        breadcrumbArrow.className = 'breadcrumb-menu-arrow';
        return breadcrumbArrow;
    }
    return {
        'setMenuCategories':setMenuCategories
    }
})();
