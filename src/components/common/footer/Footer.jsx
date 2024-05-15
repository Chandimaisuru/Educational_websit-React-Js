import React from 'react'
import "./footer.css"
import { blog } from '../../../dummydata'

function Footer() {
  return (
    <>
    <section className='newletter'>
        <div className="container flexSB">
            <div className="left row">
                <h1>Newsletter -Stay tune and get the latest update</h1>
                <span>far far away, behind the word mountains</span>
            </div>

            <div className="right row">
                <input type="text" placeholder='Enter email address' />
                {/* <i className='fa fa-paper-plane'></i> */}
            </div>
        </div>
    </section>

    <footer>
        <div className="container padding">
            <div className="box logo">
                <h1>ACADEMIA</h1>
                <span>Online education & learning</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veniam blanditiis quaerat eos veritati</p>
                <i className='fab fa-facebook-f icon'></i>
                <i className='fab fa-instagram icon'></i>
                <i className='fab fa-twitter icon'></i>
                <i className='fab fa-youtube icon'></i>
            </div>
            <div className="box link">
                <h3>Quick Links</h3>
                <ul>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="bxo">
                <h3>Recent Post</h3>
                {blog.map((val) =>{
                    return(
                    <div className="items flexSB">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                        <span>
                            <i className='fa fa-user'></i>
                            <label htmlFor=''>{val.type}</label>
                        </span>
                        <span>
                            <i className='fa fa-calendar-alt'></i>
                            <label htmlFor=''>{val.date}</label>
                        </span>
                            <h4>{val.title}</h4>
                        </div>
                    </div>
                )})}
            </div>
            <div className="box last">
                <h3>Have a Qustions</h3>
                <ul>
                    <li>
                        <i className='fa fa-map'>
                            203 Fake ST.Mount View , San francisio california ,USA
                        </i>
                    </li>
                    <li>
                        <i className='fa fa-phone-alt'>
                           +947 787 7890
                        </i>
                    </li>
                    <li>
                        <i className='fa fa-paper-plane'>
                           izzy@gmail.com
                        </i>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    <div className="legal">
        <p>Copyright @2022 all rights reserved | This template is made iwth <i className='fa fa-heart'></i> By izzy </p>
    </div> 
    </>
  )
}

export default Footer