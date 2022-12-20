import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link, useParams,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import {FaSearch} from 'react-icons/fa'


function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) =>{
        console.log("submitted")
        e.preventDefault();
        navigate('/searched/'+input)
    }
  return (
    
    

    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch/>
        <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
        </div>
    </FormStyle>
    
  )
}

const FormStyle = styled.form`
margin:0rem 20rem;

 div{
    width:100%;
    position:relative;
}
input{
    border:none;
    background:linear-gradient(35deg,#494949,#313131);
    font-size:1.5rem;
    padding:1rem 3rem;
    border:none;
    border-radius:1rem; 
    outline:none;
    width:100%;
    color:white;
}
svg{
    position:absolute;
    top:50%;
    left:0%;
    transform: translate(100%, -50%);
    color:white;

}
`;

export default Search