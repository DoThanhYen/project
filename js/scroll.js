var navbar= document.querySelector(".navigation");
var feature =document.querySelector(".featured");
window.onscroll =()=>{
    if(window.scrollY>300){
        navbar.classList.add('color__black');
        feature.classList.add('feature');
    }else {
        navbar.classList.remove('color__black');
        feature.classList.remove('feature');
    } 
         
}

