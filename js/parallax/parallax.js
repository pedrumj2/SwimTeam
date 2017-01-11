/*Generates a parallax effect. 
__idparent: The parent element where the image is located inside.
    this is used to get upper bound of the image to determine
    when to start the transition effect
__idImage: The image to move
__type: {1, 0}: 1 start moving image when the top of the screen reaches
images. 0 start moving image when the bottom of the screen reaches the images
(normally used for feature images)
In order for this to work you will need to call the create_effect function
on the onscroll event 
*/
var Parallax = function(__idParent, __idImage, __type){
    var _self = this;
    _self.private = {  
        screenHeight: 0,
        parallexImage : null,
        parallexWrapper : null, 
        busy : false, 
        type : -1, 
        isMouse : false, 
        set_objects(){
            INNER.screenHeight = window.innerHeight;
            INNER.parallexImage = document.getElementById(__idImage);
            INNER.parallexWrapper = document.getElementById(__idParent);
            INNER.type = __type;
        }, 
        set_handlers(){
            window.addEventListener('resize',  INNER.resize_handler);
            window.addEventListener('scroll',  INNER.scroll_handler);
        }, 
        resize_handler(){
            INNER.screenHeight = document.body.clientHeight;
            INNER.screenWidth = window.innerWidth;
        }, 
        scroll_handler(){
            if (INNER.isMouse == false){
                _self.create_effect(false);
            }
            
        }, 
        disable_ismouse(){
            INNER.isMouse =false;
        }
    };
    
    //call this on the onscroll event. 
    this.create_effect = function(__isMouse){
        
        if (__isMouse == true && INNER.isMouse == false){
            INNER.isMouse = true;
            window.setTimeout(INNER.disable_ismouse, 100);
        }
        if (__type == 1){
        var _top  =INNER.parallexWrapper.getBoundingClientRect().top;
        var _x =Math.round( ( _top)*2/3 );
       }
       else{
           var _top  =INNER.parallexWrapper.getBoundingClientRect().top;
             var _x =Math.round( ( _top-INNER.screenHeight)*2/3 );
       }
        
        if (_x < 0){
            _x =-_x;
            INNER.parallexImage.style.transform = "translate3d(0, " + _x + "px, 0)";
            INNER.busy = false;
        }
    };

    var INNER = _self.private;
    _self.private.set_handlers();

    _self.private.set_objects();

}















