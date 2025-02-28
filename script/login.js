document.getElementById("Login-btn").addEventListener("click", function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value ;
    // console.log(accountNumber);
    const pin = document.getElementById("pin").value;
    // console.log(pin);
    if (accountNumber<11){
        console.log("This number is valid")
        
    }
    else{"This Number is not valid"}

    

})