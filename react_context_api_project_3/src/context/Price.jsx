
import React from "react";

import { createContext,useContext } from "react";

export const pricecontext=createContext({

    price:"500",
    smallprice:()=>{},
    middleprice:()=>{},
    largeprice:()=>{},
})

export const Priceprovider=pricecontext.Provider

export default function useprice(){

    return useContext(pricecontext)
}