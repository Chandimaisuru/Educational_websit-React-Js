import React from 'react'
import Back from '../common/back/Back'
import "./contact.css"

function Contact() {
    const map = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15849.767456666534!2d80.777543!3d6.71580885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1715586515186!5m2!1sen!2slk"
  return (
    <>
     <Back title='Contact Us'/>
     <section className='contact padding'>
        <div className='container shadow flexSB'>
            <div className='left row'>
                <iframe src={map}></iframe>
            </div>
            <div className='right row'>

               <h1>Contact Us</h1>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, iste.
               </p>

               <div className="items grid2">
                <div className="box">
                  <h4>ADDRESS</h4>
                  <p>198 west 21st street, suit 751 New York</p>
                </div>

                <div className="box">
                  <h4>Email:</h4>
                  <p>izzy@gmail.com</p>
                </div>

                
                <div className="box">
                  <h4>Phone:</h4>
                  <p>+947 765 4342</p>
                </div> 

               </div>

               <form action="">

                <div className="flexSB">
                  <input type="text" placeholder='Name' />
                  <input type="email" placeholder='Email' />
                </div>
                <input type="email" placeholder='Subject' />
                <textarea  cols="30" rows="10">
                  Create a message here
                </textarea>
                <button className='primary-btn'>SEND MESSAGE</button>
               </form>

                   <h3>Follow us here</h3>
                   <span>FACEBOOK TWITTER INSTAGRAM DRIBB</span>
            </div>
        </div>

     </section>
    </>
  )
}

export default Contact