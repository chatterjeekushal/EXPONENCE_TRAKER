import React from 'react'

function Manu({videoname,handelselect}) {
    return (
        <div>

<form action="">

{
    videoname.map((namedata)=>{

        return(

        <div>

<span>{namedata}</span>

<input type="radio" name='video' value={namedata} onClick={(e)=> handelselect(e.target.value)} />

        </div>    
            
        
        )
    })
}

</form>

        </div>
    )
}

export default Manu
