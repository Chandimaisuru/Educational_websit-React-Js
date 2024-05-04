import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom'

function Back({title}) {
    const location = useLocation()
  return (
    <div>
        <section className='back'>
          <div className='back_sub'>
          <h2>Home /{location.pathname.split("/")[1]}</h2>
           <h1>{title}</h1>
          </div>
        </section>

        <div className="margin"></div>
    </div>
  )
}

export default Back