import React from 'react'
import Title from '../common/title/Title'

import PriceCard from '../pricing/PriceCard'

function HPrice() {
  return (
    <>
         <div className="hprice padding">

         <Title subtitle='Our pricing' title='pricing & packages'/>

        <div className="price container grid">
   
                 <PriceCard/>
            </div>
     </div>
    </>
  )
}

export default HPrice