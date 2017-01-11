 
function WindowLoad(event) {
 
  var parallex =[null, null, null];
  parallex[0] = (new Parallax("backgroundParent1", "swap1", 1));
  parallex[1] =(  new Parallax("backgroundParent2", "parentImg2", 0));
  this.dispatch = function(){
    for (var i = 0; i< 2; i++){
      parallex[i].create_effect(true);
    }
    var scrollTop = $(window).scrollTop();
    if (scrollTop != 0){
      document.getElementById("menu_wrapper").className = "scrolled";
    }
    else{
      document.getElementById("menu_wrapper").className = "";
    }
  };
 
  var smooth = new SmoothScroll(this.dispatch);
  this.dispatch();
}

window.addEventListener('load',  WindowLoad);