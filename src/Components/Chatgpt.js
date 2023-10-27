import React, { useState } from 'react'
import "./Chatgpt.css"
import axios from 'axios';
function Chatgpt() {
    const [answer,setAnswer] = useState("");
    const [ask,setAsk] = useState("");
    async function HandleClick(e) {
        e.preventDefault()
        console.log(ask);
        await axios.post("http://localhost:8000/chat",{ask})
        .then((res)=>{
            console.log(res.data)

            setAnswer(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })



    }
  return (
    <div className='Chatgpt'>
        <div className='Input'>
            <h1 className='Header'>Alen's ChatGPT</h1>
            <div className='Forms'>
            <input className='Form' type='text' placeholder='Ask something' onChange={(e)=>{setAsk(e.target.value)}} />
            <button className='Button' onClick={HandleClick}>Ask</button>
            </div>
            <div className='Result'>
                <p>Why don't we ever tell secrets on a farm?

Because the potatoes have eyes and the corn has ears!</p>
            </div>
        </div>
    </div>
  )
}

export default Chatgpt