
window.onload = function WindowLoad(event) {
  this.dispatch = function(){
    
  };
  var smooth = new SmoothScroll(this.dispatch);
   document.getElementById("menu_wrapper").className = "scrolled";
}