require('dotenv').config();
const readline = require('readline-sync');
const witClient = require('./config/witAi');
const { 
    getWitResponse,
    defaultResponse
} = require('./controller/ResponseClass');

askQuestion = async () => {
    while (true) {
        const question = readline.question("You: ");

        try {
            const response = await witClient.message(question);
            console.log("Bot:", await getWitResponse(response));
        } catch (error) {
            console.error("Error:", error.message);
        }
    }
}

console.log("Bot:", defaultResponse());
askQuestion();

