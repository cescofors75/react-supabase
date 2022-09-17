import {useEffect, useState} from 'react'
import { useTasks} from '../context/TaskContext'



export function Currency() {
    //const {tasks, getTasks} = useTasks();
    const [currency, setCurrency] = useState("");
    
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://v6.exchangerate-api.com/v6/b1c79e722136aa3fa32e5909/latest/EUR')
        .then((response) => response.json())
    .then((actualData) => {setCurrency(actualData.conversion_rates)});
           // .then(data => setTotalReactPackages(data.total));
    
    }, []);
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
   

    console.log (currency);
   
    return <div>
     

                
                <h3>USD: {currency.USD}</h3>
                <p>GBP: {currency.GBP}</p>
                <p>JPY: {currency.JPY}</p>
                <p>CHF: {currency.CHF}</p>
                <p>INR: {currency.INR}</p>
                <p>AUD: {currency.AUD}</p>
                <p>CAD: {currency.CAD}</p>
                <p>CNY: {currency.CNY}</p>
                <p>HKD: {currency.HKD}</p>
                <p>IDR: {currency.IDR}</p>
                <p>ILS: {currency.ILS}</p>
                
               
                
          
       
    </div>;   
}

       
           
    

export default Currency



