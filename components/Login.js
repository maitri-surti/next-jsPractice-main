import React, {useState} from "react";

export default function Login() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error, setError]=useState(null)
  const [isLoggingIn, setIsLoggingIn]=useState(true);

  function submitHandler(){
    if(!email || !password){
      setError('Please enter Email and Password')
      return
    }
  }

  return <div className="flex-1 flex flex-col justify-center items-center text-xs sm:text-sm gap-2 sm:gap-4">
    <h1 className="font-extrabold text-2xl sm:text-4xl uppercase">{isLoggingIn ? 'Login' : 'Register'}</h1>
    {error && <div className="border-rose-400 w-full max-w-[50ch] text-rose-400 border border-solid text-center py-2">{error}</div>}
    <input value={email} onChange={(e)=>{setEmail (e.target.value)}} type='email' placeholder='Email Address' className=" p-2 w-full max-w-[50ch] text-slate-900 outline-none"/>
    <input value={password} onChange={(e)=> setPassword (e.target.value)} type='password' placeholder='Password' className="p-2 w-full max-w-[50ch] text-slate-900 outline-none "/>
    <button onClick={submitHandler} type="submit" className="font-bold border border-solid border-white py-2 w-full max-w-[50ch] hover:bg-white hover:text-slate-900">SUBMIT</button>
    <h2 className="duration-300 hover:scale-110 cursor-pointer"onClick={()=>setIsLoggingIn(!isLoggingIn)}>{!isLoggingIn ? 'Login' : 'Register'}</h2>
  </div>;
}
