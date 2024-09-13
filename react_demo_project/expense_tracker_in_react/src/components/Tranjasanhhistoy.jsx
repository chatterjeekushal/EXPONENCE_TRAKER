import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTranjasan } from '../features/tranjasan/Tranjasan'

function Tranjasanhhistoy() {

    const tranjasans = useSelector(state => state.tranjasans)

    const dispatch=useDispatch()

    return (
        <div>

            <div>tranjasan history</div>


            {
                tranjasans.map((tran, i) => (

                    <li key={tran.id}>

                        {tran.text}

                        {tran.amount}

                        <button onClick={()=>dispatch(removeTranjasan(tran.id),console.log(tran.id,"tran id"))} >delete</button>

                    </li>
                ))
            }

        </div>
    )
}

export default Tranjasanhhistoy
