

import {useEffect, useState} from 'react'

export function Exchange() {
 
    const [currency, setCurrency] = useState("");
    
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
    const key=process.env.REACT_APP_EXCHANGERATEAPI_KEY
    const url = `https://v6.exchangerate-api.com/v6/${key}/latest/EUR`
        fetch(url)
            .then(response => response.json())
            .then(data => setCurrency(data.conversion_rates));
    }, []);

    return (
        
        

        <div  className='exchange'>
            <h3>Exchange Rates</h3>
            <p>1 EUR = {currency.USD} USD</p>
            <p>1 EUR = {currency.GBP} GBP</p>
            <p>1 EUR = {currency.JPY} JPY</p>
            <p>1 EUR = {currency.CNY} CNY</p>
        
       </div>
    
    );

  



}      
  


export default Exchange