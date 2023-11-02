# github-app

# GitHub Code Execution App

**Description**: A GitHub App that executes code in pull requests.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Code Execution API Integration](#code-execution-api-integration)
- [Known Issues](#known-issues)
- [Troubleshooting](#troubleshooting)
- [Author and Contact Information](#author-and-contact-information)
- [Acknowledgments](#acknowledgments)


## Files and Folders to explore

root
├── index.js - Default route installed with Probot library.
├── main.js - My main route.
└── code - My folder
    ├── generateExecutedCode.js
    └── getPullRequestCode.js

Please checkout __main.js__ file, and __code__ folder where I have written all the code.

## Installation

Installation instructions here.

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ritesh22201/github-app.git
   ```

2. Navigate to the project directory:
   
   ```bash
   cd github-code-execution-app
   ```

3. Install the project dependencies:
   
   ```bash
   npm install
   ```

## Configuration

Create a .env file in the project root directory with the following content:

- **APP_ID**=YOUR_GITHUB_APP_ID
- **PRIVATE_KEY**=YOUR_GITHUB_APP_PRIVATE_KEY
- **WEBHOOK_SECRET**=YOUR_GITHUB_APP_WEBHOOK_SECRET
- **GOOGLE_API_KEY**=YOUR_GOOGLE_API_KEY


## Usage

Ensure your GitHub App is installed in your GitHub repository.

Create a pull request with the command __/execute__ in the pull request body, comments, or commit messages.

The app will automatically detect the command and execute the code within the pull request.

The code execution output will be posted as a comment in the pull request.


## Code Execution API Integration

The GitHub Code Execution App integrates with the following external packages:

- **Probot**: Used for handling GitHub events and interactions.
- **@google-ai/generativelanguage**: Provides AI-powered code execution capabilities.
- **google-auth-library**: Enables authentication with the Google API.
- **dotenv**: Helps manage environment variables.

## Known Issues

The application is working partially.

## Troubleshooting

If you encounter any issues or have questions, please feel free to reach out to me for assistance. You can find contact information in the "Author and Contact Information" section below.

## Author and Contact Information

- **Author**: Ritesh Goswami
- **Email**: riteshgoswami22201@gmail.com
- **GitHub**: [ritesh22201](https://github.com/ritesh22201)

## Acknowledgments

Special thanks to the Probot, Google for providing the open-source resources to the community.
