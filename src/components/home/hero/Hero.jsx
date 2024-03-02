import React from 'react'
import './hero.css'

function Hero() {
  return (
   <>
   
       <section className='hero'>
         
         <div className="container">

            <div className="row">

             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae veniam possimus cum ex quisquam, culpa soluta voluptas dolorem distinctio. Odio, iste cum tempora est quae, deserunt ea voluptatibus obcaecati, labore natus aspernatur perferendis facere fugit! Assumenda non voluptas autem in.</p>

                <button className='primary-btn'>
                    GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                </button>

                <button className='secondary-btn'>
                  VIEW COURSE<i className='fa fa-long-arrow-alt-right'></i>
                </button>
            </div>
         </div>
        
        </section> 

   </>
  )
}

export default Hero