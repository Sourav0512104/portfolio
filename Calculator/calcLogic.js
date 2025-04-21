const display= document.getElementsByClassName("display")[0]
const addOpNum =(input) =>{
    display.value += input
}
const clearDisp =() =>
{
    display.value= ""
}
function calculate() 
    {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value='Error';
        }
    }
    