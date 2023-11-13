
function detectChar(){
    
  const input=document.getElementById("input")
  const result=document.getElementById("result")

  const Character=input.value;

  if(IsAscii(Character))
  {
    result.innerText ="ASCII Character";
  }
  else{
    result.innerText ="UNICODE CHARACTER";
  }

}
function IsAscii(character)
{
    return character.charCodeAt(0) <= 127;
}