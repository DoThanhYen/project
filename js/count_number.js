function Count_Number(finaNumber, duration , startNumber =0 , callback){
   var currentNumber= startNumber;
   var interval = window.setInterval(updateNumber, duration);
   let inc= Math.ceil(finaNumber/(duration/17));
   function updateNumber(){
       if(currentNumber>=finaNumber){
           clearInterval(interval);
       }else {
           currentNumber+=inc;
           console.log(currentNumber);
           if(currentNumber>finaNumber){
               currentNumber=finaNumber;
           }
       }
       callback(currentNumber);
   }
}

document.addEventListener('DOMContentLoaded',function(){
    
    Count_Number(18,200,0,function(number){
        const formattedNumber= number.toLocaleString();
        document.getElementById("count__years").innerText=formattedNumber;
    });

    Count_Number(98,200,0,function(number){
        const formattedNumber= number.toLocaleString();
        document.getElementById("count__menus").innerText=formattedNumber;
    });

    Count_Number(1500,200,0,function(number){
        const formattedNumber= number.toLocaleString();
        document.getElementById("count__staffs").innerText=formattedNumber;
    });

    Count_Number(15000,200,0,function(number){
        const formattedNumber= number.toLocaleString();
        document.getElementById("count__customers").innerText=formattedNumber;
    });
})
