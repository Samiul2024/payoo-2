// reuseable function
function getInputValueByID(id) {
    // console.log('hello boss')
    // return "hello boss"
    // console.log(id)
    const value = document.getElementById(id).value;
    // console.log(amount)
    const convertedValue = parseFloat(value);
    // console.log(convertedAmount) // do not do this
    return convertedValue;
}


function getInnerTextByID(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function setInnerTextByIDandValue(id, value) {
// console.log(id,value)
document.getElementById(id).innerText=value;
}



function handToggle(id, status) {
    document.getElementById(id).style.display = status;

}