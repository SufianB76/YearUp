document.querySelector('#tip-form').onchange = function () {

    var bill = Number(document.getElementById('billTotal').value);
    var tip = document.getElementById('tipInput').value;
    var splitBill = document.getElementById('splitBill').value;
    document.getElementById('tipOutput').innerHTML = `${tip}%;`
    var tipValue = bill * (tip / 100)
    var finalBill = bill + tipValue
    var splitBill = finalBill / splitBill
    console.log(splitBill)
    var tipAmount = document.querySelector('#tipAmount')
    var totalBillWithTip = document.querySelector('#totalBillWithTip')
    var splittedBill = document.querySelector('#splittedBill')

    tipAmount.value = tipValue.toFixed(2);
    totalBillWithTip.value = finalBill.toFixed(2);
    splittedBill.value = splitBill.toFixed(2);


    //show reults

    document.getElementById('results').style.display = 'block';
}