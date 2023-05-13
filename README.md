# Simple ToDo App

This repository contains a simple ToDo app built with Next.js and utilizing the React Context API for state management.

## Installation

To run this application locally, please follow these steps:

1. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/OrangeAVA/Building-Scalable-Web-Applications-with-Next.js-and-React.git
   ```

2.  Navigate to the project directory:

   ```bash
   cd simple-todo-app
   ```

3. Install the dependencies by running:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   This command will start the application in development mode. Open your browser and visit `http://localhost:3000` to see the app in action.

## Usage

Once the application is running, you will see a simple interface for managing your ToDo list. You can add new tasks, mark them as completed, and delete them.

The app uses the React Context API for state management, allowing the tasks to be shared across components without prop drilling. The state is persisted in the browser's local storage, so your tasks will be saved even if you refresh the page.

## Folder Structure

The repository's folder structure is organized as follows:

- `pages`: This directory contains the Next.js pages that make up the application's routes.
- `components`: This directory contains reusable components used throughout the application.
- `contexts`: This directory contains the React Context and its provider, responsible for managing the state of the ToDo tasks.
- `styles`: This directory contains the CSS styles for the application.

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

When contributing, please follow the existing coding style and commit message conventions to maintain consistency throughout the project.
