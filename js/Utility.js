
/*

*/
var Utility = {


  //Due to different aspect ratios in images with:100% will not always
  //fill the parent div. This function will adjust that. Make sure 
  //an event handler for window.resize is also set to this function
  fillImage : function(__idImage, __idParent){
       var _image = document.getElementById(__idImage);
       var _parent = document.getElementById(__idParent);
       _image.style.width = "100%";
       _image.style.height = "auto";
         var _parentHeight = _parent.offsetHeight;
         var _imgHeight = _image.offsetHeight;
         if (_parentHeight > _imgHeight){
          _image.style.width = "auto";
          _image.style.height = "100%"
         }
    }, 
    
    //creates a fade in effect for divs once loaded. call this function
    // in a script after the element you want to fade in.
    fadeIn : function (__idElement){
       var _element = document.getElementById(__idElement);
       _element.style.opacity = 1;
    }
}















