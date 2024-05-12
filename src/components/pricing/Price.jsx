import React from 'react'
import Back from "../common/back/Back"
import PriceCard from './PriceCard'
import "./price.css"
import Faq from './Faq'

function Price() {
  return (
    <>
    <Back title="Choose the Right Plan"/>
    <section className='price padding'>
        <div className="container grid">
            <PriceCard/>
        </div>
        <Faq/>
    </section>
    </>
  )
}

export default Price