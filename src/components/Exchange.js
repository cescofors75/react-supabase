

import {useEffect,useState} from 'react'
import getDataApi from '../services/GetDataApi';


export function Exchange() {
 
    const [list, setList] = useState([]);
    useEffect( () => {
    // GET request using fetch inside useEffect React hook
     getDataApi().then(data => setList( data));
           
 
 }, []);  

 


    return (
        <div className='card'>
            <h3>Exchange Rates 1€</h3>
            <table>
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item) => (
                        <tr key={item[0]}>
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );



    





    

  



}      
  


export default Exchange

/*
        <div  className='card, exchange'>
            <marquee behavior="scroll" scrollamount="6" width="100%" direction="left" height="44px">
            
            1 EUR = {currency.USD} USD &nbsp;&nbsp;
             {currency.GBP} GBP &nbsp;&nbsp;
             {currency.JPY} JPY &nbsp;&nbsp;
             {currency.CNY} CNY &nbsp;&nbsp;
                {currency.INR} INR &nbsp;&nbsp;
                {currency.AUD} AUD &nbsp;&nbsp;
                {currency.CAD} CAD &nbsp;&nbsp;
                {currency.CHF} CHF &nbsp;&nbsp;
                {currency.HKD} HKD &nbsp;&nbsp;
                {currency.NZD} NZD &nbsp;&nbsp;
                {currency.SGD} SGD &nbsp;&nbsp;
                {currency.ZAR} ZAR &nbsp;&nbsp;
                {currency.KRW} KRW &nbsp;&nbsp;
                {currency.MXN} MXN &nbsp;&nbsp;
                {currency.TWD} TWD &nbsp;&nbsp;
                {currency.SEK} SEK &nbsp;&nbsp;
                {currency.NOK} NOK &nbsp;&nbsp;
                {currency.DKK} DKK &nbsp;&nbsp;
                {currency.RUB} RUB &nbsp;&nbsp;
                {currency.THB} THB &nbsp;&nbsp;
                {currency.MYR} MYR &nbsp;&nbsp;
                {currency.BRL} BRL &nbsp;&nbsp;
                {currency.PHP} PHP &nbsp;&nbsp;
                {currency.IDR} IDR &nbsp;&nbsp;
                {currency.HUF} HUF &nbsp;&nbsp;
                {currency.CZK} CZK &nbsp;&nbsp;
                {currency.PLN} PLN &nbsp;&nbsp;
                {currency.ILS} ILS &nbsp;&nbsp;
                {currency.RON} RON &nbsp;&nbsp;
                
                {currency.TRY} TRY &nbsp;&nbsp;
                {currency.AED} AED &nbsp;&nbsp;
                {currency.SAR} SAR &nbsp;&nbsp;
                {currency.ARS} ARS &nbsp;&nbsp;
                {currency.BGN} BGN &nbsp;&nbsp;
                {currency.CLP} CLP &nbsp;&nbsp;
                {currency.COP} COP &nbsp;&nbsp;
                {currency.EGP} EGP &nbsp;&nbsp;
                {currency.HRK} HRK &nbsp;&nbsp;
                {currency.KES} KES &nbsp;&nbsp;
                {currency.KWD} KWD &nbsp;&nbsp;
                {currency.LKR} LKR &nbsp;&nbsp;
                {currency.MAD} MAD &nbsp;&nbsp;
                {currency.NGN} NGN &nbsp;&nbsp;
                {currency.PEN} PEN &nbsp;&nbsp;
                {currency.PKR} PKR &nbsp;&nbsp;
                {currency.PYG} PYG &nbsp;&nbsp;
                {currency.QAR} QAR &nbsp;&nbsp;
                {currency.RSD} RSD &nbsp;&nbsp;
                
                {currency.TTD} TTD &nbsp;&nbsp;
                {currency.UAH} UAH &nbsp;&nbsp;
                {currency.VEF} VEF &nbsp;&nbsp;
                {currency.VND} VND &nbsp;&nbsp;
                {currency.XAF} XAF &nbsp;&nbsp;
                {currency.XCD} XCD &nbsp;&nbsp;
                {currency.XOF} XOF &nbsp;&nbsp;
                {currency.ZMW} ZMW &nbsp;&nbsp;
                {currency.ZWL} ZWL &nbsp;&nbsp;




            </marquee>
       </div>

       */