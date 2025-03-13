document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    // alert('hello boss');
    // getInputValueById();
    const amount = getInputValueByID("amount-number");
    const pin = getInputValueByID('pin-number');
    const account = document.getElementById('account-number').value;
    const mainBalance = getInnerTextByID('main-balance');
    const selectedBank = document.getElementById('all-bank').value;
    // console.log(selectedBank);
    // console.log(mainBalance)


    if (amount < 0) {
        alert('enter valid amount to add ')
        return;
    }



    if (account.length === 11) {
        if (pin === 1234) {
            const sum = mainBalance + amount;
            // document.getElementById('main-balance').innerText=sum;
            setInnerTextByIDandValue('main-balance', sum);
            const container = document.getElementById('transaction-container')

            // transaction history
            
            const div = document.createElement('div');
            div.classList.add('bg-red-400')
            div.innerHTML = `
            <h1 class='text-yellow-300'>Added Money from ${selectedBank} </h1 >
            <h3>${amount}</h3>
            <p>account Number: ${account}</p>
            <h2> Balance ${sum}
            `
            // <h1 class='text-yellow-300'>Added Money ${amount} by ${selectedBank} from account number: ${account} </h1 >

            container.appendChild(div)

            // previous way
            // const p = document.createElement('p');
            // p.innerText = 
            // added ${amount} from account number ${account} 
            // 
            // container.appendChild(p)
            // // console.log(p)

        } else {
            alert('pin thik nai')
        }
    } else {
        alert('account number thik nai')
    }
    // console.log(value);
    // console.log(amount,pin);




    // alert
})