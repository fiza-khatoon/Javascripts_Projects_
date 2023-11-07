
//logic is just use for loop to check each character using if else condition

function Vowelcheck()
{
    var text=document.getElementById("in").value;
    text=text.toLowerCase();                //converting all text in lower case as we take lowercase vowels in array
    
    var count=0;   //counting variables


    for(var i=0;i<text.length;i++)
    {
        var char=text.charAt(i);
         if(isVowel(char))
         {
            count++;
         }
    }

    var result=document.getElementById("result");
    result.textContent=`Total Vowels in above text are ${count}`


}

// Isvowel function

function isVowel(char)
{
    var Vowels=["a","e","i","o","u"];

    return Vowels.includes(char);

}