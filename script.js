(function(){

"use strict";

//declaring variables
var convertType = "convertType";
var form = document.getElementById('convert');
    

    function conversion(event){
                
        event.preventDefault();
        var distance= document.getElementById('distance').value;
        distance=parseFloat(distance);
        var ans = document.getElementById('answer');
        
        if(distance  )
        {//if distance is a natural number
            if(convertType=="kilometers")
            {
                var distanceInMiles= (distance/1.60934);
                var roundedDistanceInMiles= distanceInMiles.toFixed(3);//rounding of the result to 3 decimal places
                
                ans.innerHTML = `<h2> ${distance} kilometers is equal to ${roundedDistanceInMiles} Miles </h2>`
            }
            else{
                var distanceInKm= distance* 1.60934;
                var roundedDistanceInKm= distanceInKm.toFixed(3);//rounding of the result to 3 decimal places
                
                ans.innerHTML = `<h2> ${distance} miles is equal to ${roundedDistanceInKm} kilometers </h2>`
            }
        }
        else
        {//if distance is an invalid number for e.g a string
            ans.innerHTML= `<h2> Please provide a valid number</h2>`
        }

        
    }

    
    

    document.addEventListener('keypress', function(event){
    
        var key= event.key;
        if( (key=="K" || key=="k"))
        {
            convertType="kilometers";

            var heading= document.getElementById("h1");
            heading.innerHTML=`<h1> Kilometers to Miles Converter </h1>`

            var instructions= document.getElementById("p1");
            instructions.innerHTML=`<p> Type in a number of Kilometers and click the button to convert the distance to Miles. </p>`
    
           
        }
        else if(key=="M" || key=="m")
        {   
            convertType="miles";

            var heading= document.getElementById("h1");
            heading.innerHTML=`<h1> Miles to Kilometers Converter </h1>`

            var instructions= document.getElementById("p1");
            instructions.innerHTML=`<p> Type in a number of miles and click the button to convert the distance to kilometers. </p>`
            
        }
        

    });

    
    form.addEventListener('submit',conversion);


})();