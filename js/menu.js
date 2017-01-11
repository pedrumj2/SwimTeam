
function WindowLoad(event) {
  var _strip_Clicked =false;
  
  var _strip = document.getElementsByClassName("stripes")[0];
  var _menu_items = document.getElementsByClassName("item_wrapper")[0]
  _strip.onclick = function(){
    if (_strip_Clicked==false){
      _strip_Clicked = true;
      _menu_items.style.height = 200;
    }
    else{
      _strip_Clicked = false;
      _menu_items.style.height = 0;
    }
  }

   this.dispatch = function(){
     };
  var smooth = new SmoothScroll(this.dispatch);
 
}

window.addEventListener('load',  WindowLoad);