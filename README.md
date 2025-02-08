# To-Do List

**A simple and efficient To-Do List web application built with Node.js, Express, and MongoDB.** This application helps you manage your tasks effectively, whether they're personal, work-related, or for any other purpose.

## Features

### Version 1

- **Dynamic Task Lists**: Categorize tasks into main and work lists.
- **Task Management**: Add new tasks, mark them as completed, and organize them effectively.
- **Responsive UI**: Clean and minimal UI that adapts to different screen sizes.
- **Persistent Data Handling**: Uses in-memory arrays to store task data (for demo purposes, can be extended to use databases).

### Current Version

- **Database Integration**: Utilizes MongoDB for persistent data storage.
- **Enhanced Task Management**: Includes completion status for tasks.
- **About Page**: Provides details about the application, its features, and technologies used.
- **Deployment Ready**: Simplified setup for local development and deployment.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side logic.
- **Express.js**: Web framework for building the server.
- **MongoDB**: Database for storing task data.
- **EJS**: Templating engine for dynamic HTML generation.
- **Body-parser**: Middleware to handle form data.
- **CSS/HTML**: For styling and structure of the application.

## Installation

### Prerequisites

1. **Node.js**: Ensure you have Node.js installed. Download from [Node.js Official Website](https://nodejs.org/).
2. **MongoDB**: Install MongoDB and start the server. [MongoDB Installation Guide](https://www.mongodb.com/try/download/community).

### Steps to Run Locally

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Ahsanul-Mostakin/To-Do-List.git
    cd To-Do-List
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up the .env file**:

    Create a new file named `.env` at the root of the project with the following contents:

    ```env
    PORT=3001
    MONGO_URI=your_mongo_db_connection_string
    ```

4. **Start the server**:

    ```bash
    npm start
    ```

5. **Access the application**:

    Open your browser and go to `http://localhost:3001`.

## Usage

- **Add Tasks**: Enter a task in the input field and hit the "+" button to add it to your list.
- **Complete Tasks**: Click the checkbox next to a task to mark it as completed.
- **Delete Tasks**: Check the checkbox next to a task and click the "Delete" button to remove it from your list.
- **About Page**: Provides information about the application and its features.

## About

This application is a simple To-Do List manager designed for personal or work use. It provides a clean, intuitive interface for adding, completing, and deleting tasks. The Version 2 introduces MongoDB integration for persistent task storage, along with additional features and improvements.

## Contributing

Feel free to fork this repository and contribute by submitting pull requests. Any improvements, bug fixes, or feature requests are welcome.

## License

This project is licensed under the **MIT License**. See the LICENSE file for more information.

## Acknowledgments

- **Node.js**
- **Express.js**
- **MongoDB**
- **EJS**
- **GitHub**
- **npm**
- **Open-source community** for the various libraries and tools used during development.

## Live Demo
[To-Do List Application](https://to-do-list-zhra.onrender.com/)
