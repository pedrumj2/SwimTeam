/*
a sliding slider. 
__idParnet: the id of the div containing the sliding elements.
The sliding elements must be absolute divs with the class "slider_wrapper"
One of them should also have the class "active"
There should also be 2 divs inside __idparent with the classes:
".right.arrow" and ".left.arrow" a click event handler will
be attached to these
*/
var FadingSlider = function(__idParent){
    var _self = this;
    _self.private = { 
        parent : null,  
        imageWrappers   : [],  
        active : -1, 
        next : -1, 
        prev : -1, 
        left : -1, 
        width : -1, 
        rightArrow : null, 
        leftArrow : null, 
        transDuration: "", 
        set_objects : function(){
            INNER.parent = document.getElementById(__idParent);
            INNER.imageWrappers = INNER.parent.getElementsByClassName("slider_wrapper");
            INNER.transDuration = parseFloat(window.getComputedStyle(
                INNER.imageWrappers[0])["transitionDuration"]);
            INNER.set_arrows();
            INNER.set_indices();
        }, 
        set_arrows(){
            INNER.rightArrow = INNER.parent.getElementsByClassName("right")[0];
            INNER.leftArrow = INNER.parent.getElementsByClassName("left")[0];
        }, 
       
  
      
        set_indices : function(__active = -1){
           if (__active ==-1){
                INNER.set_active();
           }
          
           INNER.set_next();
           INNER.set_prev();
        }, 

        //figures out which wrapper has the active attribute
        set_active : function(){
            var classes;
            var classList;
            for (var i = 0 ; i < INNER.imageWrappers.length ; i ++){
                classes = INNER.imageWrappers[i].getAttribute("class");
                if (classes.includes("active")==true){
                    INNER.active = 0;
                    break;
                }
            }
        }, 

        //determiens which wrapper is next in line
        set_next : function(){
            INNER.next = INNER.active + 1;
            if (INNER.next == INNER.imageWrappers.length){
                INNER.next =0;
            }
        },

        //determines which wrapper is previous in line
        set_prev : function(){
            INNER.prev = INNER.active - 1;
            if (INNER.prev == -1){
                INNER.prev =INNER.imageWrappers.length-1;
            }
        }, 
        set_handlers : function(){
            INNER.rightArrow.onclick = INNER.right_click_handler;
            INNER.leftArrow.onclick = INNER.left_click_handler;
        }, 

        right_click_handler : function(){
       
            var _value = - INNER.width;
            INNER.imageWrappers[INNER.active].style.opacity = 0;
            INNER.imageWrappers[INNER.next].style.opacity = 1;
            INNER.inc_active();
        }, 

        left_click_handler : function(){
           
            var _value =  INNER.width;
            INNER.imageWrappers[INNER.active].style.opacity = 0;
                
            INNER.imageWrappers[INNER.prev].style.opacity = 1;
            INNER.dec_active();
        }, 
        //increment active
        inc_active : function(){
            INNER.active +=1;
            if (INNER.active  == INNER.imageWrappers.length){
                INNER.active = 0;
            }
            INNER.set_indices(INNER.active);
        }, 
        //decrement active
        dec_active : function(){
            INNER.active -=1;
            if (INNER.active  == -1){
                INNER.active = INNER.imageWrappers.length-1;
            }
            INNER.set_indices(INNER.active);
        }, 
        start_timer(){
            INNER.right_click_handler();
            window.setTimeout(INNER.start_timer, INNER.timer);
        }
    };


    var INNER = _self.private;

    this.SetTimer = function(__time){
        INNER.timer = __time;
        window.setTimeout(INNER.start_timer, INNER.timer);
      
    };
    _self.private.set_objects();
    _self.private.set_handlers();

}















