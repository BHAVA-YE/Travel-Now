import React from 'react'

export default function Contact () {
  return (
    <div>
       <div class="sub-c-container">
        <div class="topic-c">
            <div class="sub-c-topic">
                <div class="title">CONTACT US</div>
            </div>
            <div class="categories">
                <h2>Reach Us</h2>

                <div class="split">

                    <div class="split1">

                        <div class="icons">
                            <div class="icon1">
                                <i class="fa-light fa-phone"></i>
                                <div class="contact-text">
                                    <p>CALL US</p>
                                    <p>+91-8047091759</p>
                                </div>
                            </div>
                            
                            <div class="icon2">
                                <i class="fa-regular fa-envelope"></i>
                                <div class="contact-text">
                                    <p>EMAIL ID</p>
                                    <p>bhavaharini@gmail</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="apps">
                            <div class="divie">
                                <div class="ldn"><i class="fa-brands fa-linkedin"></i></div>
                                <div class="ins"><i class="fa-brands fa-instagram"></i></div>
                                <div class="yt"><i class="fa-brands fa-youtube"></i></div>
                                <div class="fb"><i class="fa-brands fa-facebook"></i></div>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    <div class="split2">
                        <div class="container-c">
                            <p>Get in touch with us for any queries or questions. Our executive will get in touch with you at earliest</p>
                            <hr/>
                            
                            <form action="homepgv.html" method="get" class="content-c">
                                
                                <div id="info">
                                    <label>Name</label>
                                    <i class="fa-regular fa-user"></i>
                                    <input type="text" name="name" id="name" placeholder="Name"/>
                                </div>
                                
                                <div id="info">
                                    <label>Email ID</label>
                                    <i class="fa-regular fa-envelope"></i>
                                    <input type="email" name="email" id="email" placeholder="Email"/>
                                 </div>

                                <div id="info">
                                    <label>Phone</label>
                                    <i class="fa-light fa-phone"></i>
                                    <input type="phone" name="phone" id="phone  " placeholder/>
                                </div>
                                
                                <div id="info">
                                    <label>Message</label>
                                    <i class="fa-regular fa-message"></i>
                                    <textarea id="message" name="message" rows="5" cols="30" placeholder="Type your message here..."></textarea>
                                </div>
                                
                                <div id="send">
                                    <button name="event" value="message">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
