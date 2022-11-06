import React, { useState } from "react";
import validator from 'validator'
import './App.css'
import logo from '../src/assets/pet.gif'
import { Outlet, Link } from "react-router-dom"
function Login() {
  
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError(
        <a href="http://localhost:3000/home">
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login to Pet Hub</button>
          </a>
      )
    } else {
      setEmailError('Enter valid Email!')
    }
  }
     return(
        <div className="Pet_Hub">
       <section >
                  <div class="py-24 px-12 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-24 ">
              <div class="flex justify-center">
                <img src={logo} class="h-48"/>
              </div>
                    <h3 class="mt-2 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">For the Promise you have made!</h3>
                     <p class=" text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Pet Hub, we believe pets make us better people because One life saved is a life worth living.So never stop Helping! .</p>
                  <div class="flex justify-center">
                  </div>
                   <div class="flex justify-center mt-8 mb-8 lg:mb-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
    <input type="email" class="bg-white w-auto text-gray-900 font-bold text-sm rounded-lg block w-full p-2.5 shadow-lg shadow-blue-500/50  dark:placeholder-gray-400 dark:text-black" placeholder='Login with Email' onChange={(e) => validateEmail(e)}/>
        </div>
      <div class="lg:mb-8 flex justify-center">
      <div style={{
          fontWeight: 'bold',
          color: 'white',
        }}>{emailError}</div>
                     </div>
                    
                </div>
            </section>
            <br/><br/><br/><br/>
        </div>
                         

                     );
                     };
                     export default Login