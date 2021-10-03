function updateHeight(value){
    var boxes = document.getElementsByClassName('example');
    for(i in boxes) {
      boxes[i].style.height = value + "em";
    }
  }
  
  function updateWidth(value){
     var boxes = document.getElementsByClassName('example'); 
    for(i in boxes) {
      boxes[i].style.width = value + "em";
    }
  }
  
  
  function updatePadding(value){
     var boxes = document.getElementsByClassName('example');
    for(i in boxes) {
      boxes[i].style.padding = value + "em";
    }
  }
  
  function updateMargin(value){
     var boxes = document.getElementsByClassName('example');
    for(i in boxes) {
      boxes[i].style.margin = value + "em";
    }
  }
  
  
  function updateBorder(value){
     var boxes = document.getElementsByClassName('example');
    for(i in boxes) {
      boxes[i].style.borderWidth = value + "px";
    }
  }
  
  function updateBoxSizing(cb){
    cb.checked ? document.querySelector('#wrapper').style.boxSizing = "border-box" : document.querySelector('#wrapper').style.boxSizing = "content-box";
  }