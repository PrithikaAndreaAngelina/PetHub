import { Outlet, Link } from "react-router-dom"
import React from 'react';
import { useEffect, useState } from "react";
import "./App.css";
import side from '../src/assets/gif.gif'
import { Users } from "./users";
import Table from "./Table";

function Home() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
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
<form class="flex justify-center mb-4">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input  onChange={(e) => setQuery(e.target.value.toLowerCase())} type="search" id="default-search" class="block p-4 pl-10 w-72 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Requirements, Place..."/>
    </div>
</form>
{<Table data={search(Users)} />}
  </div>
  );
};

export default Home