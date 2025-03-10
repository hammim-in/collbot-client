# @hammim-in/collbot-client

Collbot is an AI-driven chatbot solution that seamlessly integrates into your website via a simple package. Easily configure your chatbot with company-specific details, terms, and policies, enabling it to provide instant and accurate responses to customer queries. Enhance user engagement and automate customer interactions effortlessly with Collbot. 🚀

## Installation

Install the package using npm:

```sh
npm i @hammim-in/collbot-client
```

Or using yarn:

```sh
yarn i @hammim-in/collbot-client
```

## Usage

```javascript
"use client"
import React from 'react'
import CollBot from '@hammim-in/collbot-client'

const App = () => {
  return (
    <div><CollBot options={{themeColor: "red", title: "Ai-Collbot"}}/></div>
  )
}

export default App

```



## Features

- 🔥 *Fast and lightweight* chatbot integration
- 🤖 Supports AI-based responses
- ⚡ Easy to set up and use
- 🛠 Configurable settings for different AI models

## Configuration

You can pass the following options when initializing the chatbot:

| Option  | Type   | Description |
|---------|--------|-------------|
| apiKey | string | Your API key for the AI model (upcoming) |
| model  | string | AI model to use (e.g., gpt-3.5-turbo) (upcoming) |
| themeColor | string | set background color |
| title | string | title of ai chat bot |
| icon | string | image url of logo |

Example:

```javascript
const bot = new collbot({
  apiKey: 'your-api-key',
  model: 'gpt-4',
  temperature: 0.9
});
```


## Contribution

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

MIT License © 2025 Hammim.in