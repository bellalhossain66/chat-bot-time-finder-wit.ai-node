# Simple Current Time Finder using Wit.ai & Node.js
This is a Node.js application that uses Wit.ai to process natural language queries (e.g., "What time is it in Bangladesh?") and fetches the current time for a given location.
Ask valid location time. like:
```bash
Bot: hey! ask me something ?
You: what time is it in bangladesh ?
Bot: Asia/Dhaka: 21-03-2025 01:09:11
You: what time in Kolkata ?
Bot: Asia/Kolkata: 21-03-2025 00:39:22
You: How's going on ?
Bot: thanks for asking me
```

## Features
- Understand Natural Language using Wit.ai
- Get the current time for any location
- Fast & Lightweight (Uses moment-timezone or external APIs)

## Installation
### Clone the repository
``` bash
git clone https://github.com/bellalhossain66/chat-bot-time-finder-wit.ai-node.git
```
### Install dependencies
```bash
npm install
```
### Set up .env file
Create a .env file in the root directory and add:

```bash
WIT_AI_TOKEN=your_wit_ai_access_token
```