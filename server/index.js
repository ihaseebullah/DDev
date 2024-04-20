const express = require("express")
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require('cors')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.get('/', async (req, res) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Hello`
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    let message = text
    res.json({ message })
})
app.post('/', async (req, res) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `${req.body.prompt}`
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    let message = text
    res.json({ message })
})
app.listen(3000, () => {
    console.log("Listening on port 3000")
})