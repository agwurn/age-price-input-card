import React from 'react'

const ErrorMsg = ({children}) => {

  return (
    <div className='p-1 bg-red-100 text-red-500 text-xs'>{children}</div>
  )
}

export default ErrorMsg