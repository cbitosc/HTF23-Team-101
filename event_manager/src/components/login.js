"use client";
import React from 'react';
import {useState} from 'react';
import {useRef} from 'react';
import MyToggle from '@/app/login/switch';
import Cookies from 'js-cookie';

function Login() {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [check, setcheck] = useState(false);
  let checkRef = useRef(null);
  let handleUsername = (e) => {
    setUsername(e.target.value);
  }
  let handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    console.log(checkRef.current.value);
  }
  let handleCheck = (e) => {
    console.log(e.target.value);
    setcheck(e.target.value);

  }

  let handleSubmit = (e) => {
    Cookies.set('username', username, { expires: 7, path: '/' })
  }

    Cookies.set('name', 'value', { expires: 7, path: '/' })
    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">SIGN IN</p>
        </div>
        <div>
        <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer "
              htmlFor="flexSwitchCheckDefault">Student</label>
          <input
              className=" text-black mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              ref={checkRef}
              onChange={handleCheck}
              />
              
          <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="flexSwitchCheckDefault">College SPOC</label>
      </div>

        <input onChange={handleUsername} value={username} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Username" style={{color: "black"}}/>
        <input onChange={handlePassword} value={password} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" style={{color: "black"}}/>
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
        </div>
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account? <a className="text-red-600 hover:underline hover:underline-offset-4" href="#">Register</a>
        </div>
      </div>
    </section>
    );
}

export default Login