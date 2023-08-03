import React from 'react'

const ErrorMsg = ({num, children}) => {

  return (
    <div data-testid={`card-error-${num}`} className={`${children?"":"opacity-0"} h-[2em] p-1 bg-red-100 text-red-500 text-xs`}>{children}</div>
  )
}

export default ErrorMsg