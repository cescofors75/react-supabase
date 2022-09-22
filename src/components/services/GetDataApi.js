





let list = [];
const key=process.env.REACT_APP_EXCHANGERATEAPI_KEY
const url = `https://v6.exchangerate-api.com/v6/${key}/latest/EUR`



export default function getDataApi () {

//export default  getDataApi() {

 
return fetch(url)
          .then(response => response.json())
          .then(data => {
           
Object.entries(data.conversion_rates).forEach(([key, value]) => {
  list.push([key,value]);
});

list.sort((a,b) =>{ return a[1]-b[1]}) 
return list

}
)

}



          //create object currency to array list
          /*  for (let key in data.conversion_rates) {
                list.push([key,data.conversion_rates[key]]);
                }*/
  
