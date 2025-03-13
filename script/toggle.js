document.getElementById('cash-out').style.display = 'none';
document.getElementById('transaction-history').style.display = 'none';

document.getElementById('add-money-box').addEventListener('click', function () {

    handToggle('add-money', 'block');
    handToggle('cash-out', 'none');
    handToggle('transaction-history','none');

    // document.getElementById('add-money').style.display = 'block';
    // document.getElementById('cash-out').style.display = 'none';
})

document.getElementById('cash-out-box').addEventListener('click',function(){
    handToggle('cash-out', 'block');
    handToggle('add-money', 'none');
    handToggle('transaction-history','none')


})
// for utilities file 
// function handToggle(id, status) {
//     document.getElementById(id).style.display = status;

// }