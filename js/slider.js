
var  sliderIndex=0;
const showSlide = ()=>{
    
    let i ; 
    slider= document.getElementsByClassName("slider__item");
    for(i=0; i<slider.length; i++){
        slider[i].style.display="none";
    }
    sliderIndex++;
    if(sliderIndex>slider.length) 
    {sliderIndex=1}
    slider[sliderIndex-1].style.display="block";
    console.log(sliderIndex);
    
}

showSlide()
setInterval(showSlide,3000);





