
var dob=document.getElementById("DOB");

var result=document.getElementById("Result");
var Button=document.getElementById("button");

Button.addEventListener("click",function()
{ 

    //main logic
    var dobinput=new Date(dob.value);

    var ageInMs=Date.now()-dobinput.getTime();
    var ageDate=new Date(ageInMs);

    var age=Math.abs(ageDate.getUTCFullYear()-1970);

    //Storing age in results

    result.innerHTML=`Your age is ${age}`

})