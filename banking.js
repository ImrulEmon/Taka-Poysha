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

//withdraw
//-------------------------------

document.getElementById("withdraw-button").addEventListener('click',function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const newWithdrawAmount = parseFloat(withdrawInput.value);

    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + newWithdrawAmount;

    //update balance-----------------------------------------------

    const  balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear withdraw input
    withdrawInput.value='';
})