
import React from 'react'

function Button({children,type='button',bgcolor='bg-blue-600',textcolor='text-white', ...props}) {
  return (
    <button {...props} type={type} className={`py-2 px-4 rounded-md ${bgcolor} ${textcolor}`}>{children}</button>
  )
}

export default Button
