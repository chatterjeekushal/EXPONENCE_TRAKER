
import React,{useId} from 'react'

const Input = React.forwardRef(function Input({
    lable,
    type="text",
    classname="",
    ...props
},ref){
const id=useId()
    return (
        <div className="flex flex-col">
            {lable && <label htmlFor={id}>{lable}</label>}
            <input ref={ref} type={type} id={id} className={`py-2 px-4 rounded-md ${classname}`} {...props} /> 
        </div>
    )
})    

export default Input
