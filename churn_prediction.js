const readline = require("readline");
const responses = {
  hi: "Hi  there!",
  hello: "Hello! How can I assist you?",
  "how are you": "I'm just a bot, but I'm doing great!",
  "what is your name": "I'm a simple JavaScript ChatBot.",
  help: "Sure! Ask me anything....",
  time: "I don't have a watch, but your system clock does!",
  date: "Today is a great day!",
  "who made you": "I was created by a JavaScript programmer.",
  joke: "Why don't scientists trust atoms? Because they make up everything!",
};
const unknownResponses = [
  "I'm not sure I understand that.",
  "Can you tell me more?",
  "Interesting... go on.",
  "I see. Can you elaborate?",
  "Hmm, let me think about that...",
];


function getResponse(input) {
  input = input.toLowerCase();

  for (const key in responses) {
    if (input.includes(key)) {
      return responses[key];
    }
  }

  return unknownResponses[Math.floor(Math.random() * unknownResponses.length)];
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("🤖 ChatBot: Hello! I'm your JavaScript AI Bot. Type 'bye' to exit.");

function chatLoop() {
  rl.question("You: ", (userInput) => {
    if (userInput.toLowerCase() === "bye") {
      console.log("🤖 ChatBot: Goodbye! Have a nice day.");
      rl.close();
      return;
    }

    const response = getResponse(userInput);
    console.log("🤖 ChatBot:", response);
    chatLoop();
  });
}

chatLoop();
