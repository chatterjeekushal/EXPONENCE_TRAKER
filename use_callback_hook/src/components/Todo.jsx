import React from 'react'

import { memo } from 'react';

function Todo({todo,cg}) {

    console.log("this page is rander");

  return (
    <div>Todo is {todo} cg is {cg} </div>
  )
}

export default memo(Todo)