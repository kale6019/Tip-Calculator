const btn = document.querySelector(".calculate")
const bill = document.querySelector("#bill")
const tip = document.querySelector("#tip")
const total = document.querySelector("#total")

btn.addEventListener("click",calculate)

function calculate(){
    const billAmount = bill.value
    const tipAmount = tip.value/100
    const totalAmount = billAmount * (1 + tipAmount)

    if(bill.value === "" || tip.value === ""){
        alert("Please fill out all details")
    }

    else {
        total.innerHTML = "$" + totalAmount.toFixed(2)
    }


    console.log(totalAmount)

    
}