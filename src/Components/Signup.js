import React from 'react'

export default function Signup() {
  return (
    <div>
        <div class="containerrg">
        <form action="homepgv.html" method="get" class="contentrg">
                <div class="rg"><h1>Registration Form</h1></div>
                <div id="conpass">
                    <i class="fa-solid fa-user"></i>
                    <input type="text" name="username" id="name" placeholder="Username"/>
                </div>
                <div id="conpass">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="text" name="email" id="email" placeholder="Email"/>
                </div>
                <div id="conpass">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                </div>
                <div id="conpass">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" name="conpassword" id="conpassword" placeholder=" Confirm Password"/>
                </div>
                <div id="rg">
                    <button name="event" value="register">Register</button>
                </div>
        </form>
    </div>
    </div>
  )
}
