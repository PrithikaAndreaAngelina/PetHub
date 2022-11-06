import { Outlet, Link } from "react-router-dom"
import { useState } from 'react'
import side from '../src/assets/gif.gif'

function Fun() {
  const [details, setDetails] = useState({
    petName: '',
    Kind:'',
    Age: '',
    owner: '',
    email: '',
    items: '',
    address: '',
   
})

const PostData =async(e)=>{
    e.preventDefault()

    const{petName,Kind,Age,owner,email,items,address}=details;

   const res=await fetch("https://pet-hub-d8ba9-default-rtdb.firebaseio.com/PetHubform.json",
   {
       method:'POST',
       headers:{
           'Content-Type':'application/json'
       },
       body:JSON.stringify({
        petName,
        Kind,
        Age,
        owner,
        email,
       items,
       address,

       })
    })

}
      return(
          <div className="edu_bg ">
            
<div class="topnav " >
  <a class="active" href="http://localhost:3000/home">
    <img src={side} class="h-12"/>
    </a>
  <a >
    <Link to="/profile">
    Profile</Link>
    </a>
  <a >
  <Link to="/chats">
    Chats</Link>
  </a>
  <a >
  <Link to="/deso">
    Deso</Link>
  </a>
</div>
<main class="flex flex-col justify-center px-8 sm:mt-4">
  <div class="w-98 rounded-xl bg-white p-4 shadow-2xl shadow-white/40">
    <div class="flex justify-center">
    <h4 class="font-bold text-2xl mb-2"> Update your Profile</h4>
    </div>
    <div class="mb-4 grid grid-cols-2 gap-4">
      <div class="flex flex-col">
     <label class="w-36 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-full shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue-400">
                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span class="mt-2 text-base leading-normal">Pet Photo</span>
                <input type='file' class="hidden" />
            </label>
     </div>
      <div class="flex flex-col">
        <label for="text" class="mb-2 font-semibold">Pet Name</label>
        <input onChange={(e)=>setDetails({...details,petName:e.target.value})} type="text" id="text" class="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
      </div>
    </div>
     <div class="mb-4 grid grid-cols-2 gap-4">
      <div class="flex flex-col">
        <label for="text" class="mb-2 font-semibold">Animal Kind</label>
        <input onChange={(e)=>setDetails({...details,Kind:e.target.value})} type="text" id="text" class="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
      </div>
      <div class="flex flex-col">
        <label for="text" class="mb-2 font-semibold">Age</label>
        <input onChange={(e)=>setDetails({...details,Age:e.target.value})} type="number" id="text" class="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
      </div>
    </div>
    
    

<div class="mb-4 flex flex-col">
      <label for="email" class="mb-2 font-semibold">Owner Name</label>
      <div class="relative">
        <input onChange={(e)=>
            setDetails({...details,owner:e.target.value})}  type="email" id="text" class="w-full rounded-lg border border-slate-200 px-2 py-1 pl-8 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
      </div>
    </div>
    <div class="mb-4 flex flex-col">
      <label for="email" class="mb-2 font-semibold">Email address</label>
      <div class="relative">
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-2 top-2 h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd" />
        </svg>
        <input onChange={(e)=>
            setDetails({...details,email:e.target.value})} type="email" id="text" class="w-full rounded-lg border border-slate-200 px-2 py-1 pl-8 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
      </div>
    </div>
    <div class="mb-4 flex flex-col">
      <label for="email" class="mb-2 font-semibold">What can you help with</label>
      <div class="relative">
        <input onChange={(e)=>setDetails({...details,items:e.target.value})} type="text" id="text" class="w-full rounded-lg border border-slate-200 px-2 py-1 pl-8 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
      </div>
    </div><div class="mb-8 flex flex-col">
      <label for="email" class="mb-2 font-semibold">Address</label>
      <div class="relative">
        <input onChange={(e)=>setDetails({...details,address:e.target.value})} type="text" id="text" class="w-full rounded-lg border border-slate-200 px-2 py-1 pl-8 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
      </div>
    </div>
  <div class="flex justify-center">
  <button onClick={PostData} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Update
</button>
  </div>
  </div>
</main>
<br/>
  </div>
  );
};

export default Fun