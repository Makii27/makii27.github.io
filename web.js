function detectmob() {
    if(window.innerWidth <= 800 || window.innerHeight <= 600) {
      return true;
    } else {
      return false;
    }
 }
 
 if (detectmob()){
 top.location.href="https://maki27.itch.io/save-the-timelapse-mobile";
 }else{
    top.location.href="https://maki27.itch.io/save-the-timelapse";
    }