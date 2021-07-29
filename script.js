(function(){

"use strict";

// 1 mile = 1.60934 km
document.getElementById('convert').addEventListener('submit',function(event){
			
    event.preventDefault();
    var distanceInMiles= document.getElementById('distance').value;
    distanceInMiles=parseFloat(distanceInMiles);
    var ans = document.getElementById('answer');
    if(distanceInMiles)
    {//if distanceInMiles is a natural number
    var distanceInKm= distanceInMiles* 1.60934;
    var roundedDistanceInKm= distanceInKm.toFixed(3);//rounding of the result to 3 decimal places
    
    ans.innerHTML = `<h2> ${distanceInMiles} miles is equal to ${roundedDistanceInKm} kilometers </h2>`
    }
    else
    {//if distanceInMiles is an invalid number for e.g a string
        ans.innerHTML= `<h2> Please enter a valid number</h2>`
    }
    
});


})();