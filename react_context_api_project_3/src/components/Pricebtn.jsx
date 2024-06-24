

import React from 'react'

import useprice, { pricecontext } from '../context/Price'

import { useContext } from 'react'

function Pricebtn() {

    const { price, smallprice, middleprice, largeprice,cardtext,setcardtext } = useprice()


const onclickbtn=(e)=>{

    const pricestatus=e.currentTarget.value

    if(pricestatus=="s"){

        smallprice()
        setcardtext("java script")
        console.log("small");
    }
    else if(pricestatus=="m"){
        middleprice()
        setcardtext("python")
        console.log("meddle");
    }
    else{
        largeprice()
        setcardtext("data scince")
        console.log("large");
    }
}


    return (


        <label className="relative inline-flex items-center cursor-pointer">

            <button onClick={onclickbtn} value="s" >s</button>
            <button onClick={onclickbtn} value="m" >m</button>
            <button onClick={onclickbtn} value="l" >l</button>


        
        </label>


    )
}

export default Pricebtn
