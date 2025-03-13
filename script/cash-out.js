document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;

    const amount = getInputValueByID('cash-out-amount-number');
    // console.log(amount);
    const pinNumber = getInputValueByID('cash-out-pin-number');
    const mainBalance = getInnerTextByID('main-balance',)

    if (amount > mainBalance) {
        alert('Not enough balance to cashout');
        return;
    }

    if (accountNumber.length === 11) {
        if (pinNumber === 1234) {
            const sum = mainBalance - amount;
            setInnerTextByIDandValue('main-balance', sum);

            // transaction history
            const container = document.getElementById('transaction-container');
            const p = document.createElement('p');
            p.innerText = `
cashout ${amount} from account number ${accountNumber} Balance ${sum}
`
            container.appendChild(p)

        } else {
            alert('Invalid pin')
        }
    }

})