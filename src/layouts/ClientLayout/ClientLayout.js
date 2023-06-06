import React from 'react'
import "./ClientLayout.scss"

export function ClientLayout( props ) {
  const {children} = props; //para que podamos llamarlo
  
  return (
    <div>
      <p>Cliente</p>
      {children}
    </div>
  )
}
