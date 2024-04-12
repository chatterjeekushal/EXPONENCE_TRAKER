
import { useEffect, useState } from "react";




async function useCurrencyinfo(currency) {

    const [data, setdata] = useState({})

    useEffect(async () => {

     fetch(`https://api.exchangerate-api.com/v4/latest/usd`)

       .then((res)=> res.json())
       .then((res)=> setdata(res.rates["INR"]))

    }, [currency])


    console.log(`my data ${data}`);

    return data

}


export default useCurrencyinfo;