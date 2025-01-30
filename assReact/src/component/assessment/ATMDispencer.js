import React, { useState} from "react";

//Denominations are of : 1,2,5,10,20,50,100,200,500,1000,2000

let ATMDispencer = ()=>{

    //Get user input
    const [amount, setAmount] = useState('');

    const inputAmount = (event) =>{
        setAmount(event.target.value);
    }

    //Ready to calculate each denomination
    const denominations = [2000,500,200,100,50,20,10,5,2,1]
    const [counts, setCounts] = useState([]);
    const [countEachDispense, setcountEachDispense] = useState(0);
   
    let handleWithdrawalButton=(countEachDispense)=>{
       
        console.log("amount=", amount);
        const newCountsArr = [];
        let tempResult = amount;
        let totalDispenses = 0;
        

        for(const d of denominations){
            newCountsArr[d] = Math.floor(tempResult/d);
            totalDispenses += parseInt(newCountsArr[d]);
            tempResult %= d;
        }
        setCounts(newCountsArr);
        console.log("total dispenses: ", countEachDispense);
        setcountEachDispense(totalDispenses);
        
    }

    return (
        <>
            <div>
                <input type="text" value={amount} placeholder="Please enter withdrawal amount"
                    onChange={inputAmount}/>
                    <p>You withdraw: {amount}</p>
                <button onClick={handleWithdrawalButton}>Withdraw</button>

                {Object.keys(counts).map((d)=>(
                    <p key={d}>
                        {counts[d]} notes of Rs {d}
                    </p>
                ))}
                <hr/>
                {countEachDispense != 0 
                    ? 
                    <h5>Total notes dispensed: {countEachDispense}</h5> 
                    : ''
                }
                <hr/>
            </div>    
        </>
    )
}

export default ATMDispencer;