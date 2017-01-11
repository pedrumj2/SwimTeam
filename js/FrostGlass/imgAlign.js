/*
   Utilty function in creating a frost glass effect. Aligns 2 images
   so the blur effect can be applied. 
   __idImg: The images where the frost effect will be applied to
   __idParent: Normally the frost image will be inside an overlay div
        that will have some sort of gradient. 
   __idParent: The background image. 
*/
var imgAlign = function(__idImg, __idParent, __idParentImg){
    var _self = this;
    _self.private = { 
        img : null, 
        parent: null, 
        parentImg: null, 
        left : -1,  
        top : -1, 
        idImg : __idImg, 
        idParent : __idParent, 
        idParentImg : __idParentImg, 
        init : function (){
            INNER.set_objects();
            INNER.resize();
          
        }, 


        set_handlers : function (){
            window.addEventListener("resize", INNER.resize);
        }, 


        get_position : function(){
            INNER.img.style.marginLeft = 0;
             INNER.img.style.marginTop= 0;
            INNER.left = INNER.img.getBoundingClientRect().left;
            INNER.top = INNER.img.getBoundingClientRect().top;
        }, 
        resize : function(){
            INNER.get_position();
            INNER.set_width();
            INNER.set_height();
            INNER.set_left();
            INNER.set_top();
        }, 
        set_width : function(){
            var _widthParent  = INNER.parent.offsetWidth;
            var _widthParentImg = INNER.parentImg.offsetWidth;
            INNER.img.style.width = _widthParentImg/_widthParent*100 + "%";
        }, 

        set_height : function(){
            var _heightParent  = INNER.parent.offsetHeight;
            var _heightParentImg = INNER.parentImg.offsetHeight;
            INNER.img.style.height = _heightParentImg/_heightParent*100 + "%";
        }, 

        set_left : function(){
            var _widthParent  = INNER.parent.offsetWidth;
            var _parentImgLeft = INNER.parentImg.getBoundingClientRect().left;

            var _imgLeft = INNER.left;
            var _x = (_parentImgLeft-_imgLeft )/_widthParent*100;
            var _y = _x.toString() + "%";;
            INNER.img.style.marginLeft = _x.toString() + "%";
        }, 
         set_top : function(){
            var _widthParent  = INNER.parent.offsetWidth;
            var _parentImgTop = INNER.parentImg.getBoundingClientRect().top;
            var _imgTop = INNER.top;
            var _x = (_parentImgTop-_imgTop )/_widthParent*100;
            var _y = _x.toString() + "%";;
            INNER.img.style.marginTop = _x.toString() + "%";
           
        }, 

        set_objects : function(){
                INNER.img = document.getElementById(__idImg);
                INNER.parent = document.getElementById(__idParent);
                INNER.parentImg = document.getElementById(__idParentImg);
                
        }, 

    };
    var INNER = _self.private;
    _self.private.init();
    _self.private.set_handlers();

}















