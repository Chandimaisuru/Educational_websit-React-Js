import React from 'react'
import './hero.css'
import Title from '../../common/title/Title'

function Hero() {
  return (
   <>
   
       <section className='hero'>
         
         <div className="container">

            <div className="row">

              <Title subtitle='WELCOME TO SmartLearn' title='Best Online Education'/>

             <p>SmartLearn is an innovative educational platform designed to provide personalized learning experiences for students of all ages. Leveraging advanced technology and adaptive learning techniques. </p>

                <button className='primary-btn'>
                    GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                </button>

                <button className='secondary-btn'>
                  VIEW COURSE<i className='fa fa-long-arrow-alt-right'></i>
                </button>
            </div>
         </div>
        
        </section> 

        <div className='margin-h'></div>

   </>
  )
}

export default Hero