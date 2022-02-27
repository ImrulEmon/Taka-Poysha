document.getElementById("deposit-button").addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmount = depositInput.value;
    //console.log(depositAmount);
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositAmount = depositTotal.innerText;
    //const newDepositTotal = Number(previousDepositAmount) + Number(newDepositAmount);
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);

    depositTotal.innerText = newDepositTotal;
    
    //update balance-----------------------------------------------

    const  balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmount);
    balanceTotal.innerText = newBalanceTotal;


    //clear input field
    depositInput.value = '';
})