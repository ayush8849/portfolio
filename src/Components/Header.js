import React from "react"
import { Link } from "react-router-dom";
const Header = () =>{
    return(
     <div className="  list-none font-bold text-2xl text-white bg-slate-800" >
        
        <div className=" grid grid-flow-col col-span-2">
        <img className="h-12 w-12 rounded-r-full ml-1" src="https://i.pinimg.com/originals/94/f2/57/94f257a0414994fd65258c707f626f79.jpg" alt="logo"/>
        <div className=" grid grid-flow-col col-span-10 mt-1">
       <Link to = "/"><li className="hover:text-red-700 tranisition duration-200">Home</li></Link>
       <Link to = "/about"><li className="hover:text-red-700 tranisition duration-200">About Me</li></Link>
       <Link to = "/Project"><li className="hover:text-red-700 tranisition duration-200">My Projects</li></Link>
       <Link to = "/contact"><li className="hover:text-red-700 tranisition duration-200">Contact Me</li></Link>
       <button> Login</button>
        </div>
            </div>
            </div>
    )
}

export default Header;