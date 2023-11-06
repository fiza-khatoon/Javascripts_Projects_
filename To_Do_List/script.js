var inputs=document.getElementById("in")  //for box where text enter

var text=document.querySelector(".text")  // for text to be enter in box


function Add()
{
    if(inputs.value == "")
    {
        alert("please enter the task");
    }
    else{

        var newtxt=document.createElement("ul");
        newtxt.innerHTML=`${inputs.value}<i class="fa-solid fa-eraser"></i>`;
        text.appendChild(newtxt);

        inputs.value="";
        newtxt.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newtxt.remove()
        }

    }
}