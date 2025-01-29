import React, { useState} from "react";

//Denominations are of : 1,2,5,10,20,50,100,200,500,1000,2000

let ATMDispencer = ()=>{

    const [amount, setAmount] = useState('');

    const inputAmount = (event) =>{
        setAmount(event.target.value);
    }

    return (
        <>
             <input type="text" value={amount} placeholder="Please enter withdrawal amount"
                onChange={inputAmount}/>
                <p>You withdraw: {amount}</p>
             <button>Withdraw</button>
        
        </>
    )
}

export default ATMDispencer;