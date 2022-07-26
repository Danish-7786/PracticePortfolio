import React from 'react'
import {AiFillTwitterSquare} from "react-icons/ai"
import {AiOutlineGithub} from "react-icons/ai"
import {AiOutlineLinkedin} from "react-icons/ai"
const Link = () => {
  return (
    <div className='link'>
        <a href="https://twitter.com/AmvStaan"> <AiFillTwitterSquare size={25}/> </a>
            <a href="https://github.com/Danish-7786" ><AiOutlineGithub size={25}/></a>
            <a href="https://www.linkedin.com/in/danish-nasirkhan-pathan-01102a231/"><AiOutlineLinkedin size={25}/></a>
            <div></div>
            
    </div>
  )

}

export default Link