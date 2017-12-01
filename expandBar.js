expandBar = {
    setExpandButtons:function(){
        var box = document.querySelector('.expandedMenu');
        box.addEventListener('click',function(e){
            expandBar.collapseBox(box)
            var toggle = e.target;
            if(toggle.attributes['data'].value == 'expanded'){
                toggle.src = 'assets/arrow-collapsed.png'
                toggle.attributes['data'].value = 'collapsed';
                toggle.parentNode.className = 'collapse';
            } else {
                toggle.attributes['data'].value = 'expanded';
                toggle.src = 'assets/arrow-expanded.png';
                toggle.parentNode.className = 'expand';
            }
        });
    },
    collapseBox: function(box) {
        var boxes = box.children;
        for( b in boxes){
            if(boxes[b].className != 'collapse' && boxes.hasOwnProperty(b)){
                boxes[b].className = 'collapse'
                boxes[b].firstElementChild.src = 'assets/arrow-collapsed.png';
            }
        }
    }
}
