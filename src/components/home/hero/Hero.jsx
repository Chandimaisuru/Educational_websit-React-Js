import React from 'react'
import './hero.css'
import Title from '../../common/title/Title'

function Hero() {
  return (
   <>
   
       <section className='hero'>
         
         <div className="container">

            <div className="row">

              <Title subtitle='WELCOME TO SYSCO' title='Best Online Education'/>

             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae veniam possimus cum ex quisquam, culpa soluta voluptas dolorem distinctio. Odio, iste cum tempora est quae, .</p>

                <button className='primary-btn'>
                    GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                </button>

                <button className='secondary-btn'>
                  VIEW COURSE<i className='fa fa-long-arrow-alt-right'></i>
                </button>
            </div>
         </div>
        
        </section> 

        {/* <div className='margin'></div> */}

   </>
  )
}

export default Hero