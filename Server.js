const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require ('body-parser');
const {OpenAI} = require('openai');

const app = express();
 app.use(bodyParser.json());
 app.use(cors());

 const openai = new OpenAI({
   apiKey: process.env.APIKEY
 });
  app.post("/chat", async(req,res) => {
    const {question} = req.body ;
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": question}],
      max_tokens : 4097,
   });

    res.send(chatCompletion.choices[0].message);
    
});

 app.listen(8000,()=>{
    console.log("Connection done !!!!") ;
 })





