const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");
require('dotenv').config();

const API_KEY = process.env.GOOGLE_API_KEY;

const client = new DiscussServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY)
})

const generateExecutedCode = async (code) => {
    const result = await client.generateMessage({
        model : "models/chat-bison-001",
        prompt : {
            messages : [{content : `Execute this code ${code} and generate the probable output. Please generate only the code output after executing, do not generate the explanation.`}]
        }
    })

    return result[0].candidates[0].content;
}

module.exports = generateExecutedCode;