
import React, { useId } from 'react'

function Select({
    options,
    lablel,
    classname = "",
    ...props
}, ref) {

    const useId = useId

    return (
        <div>
            {lablel && <label htmlFor={useId}>{lablel}</label>}

            <select ref={ref} id={useId} className={`py-2 px-4 rounded-md ${classname}`} {...props} >

                {options?.map((option) => {

                    <option key={option} value={option}>{option}</option>
                })}


            </select>


        </div>
    )
}

export default React.forwardRef(Select)
