# Rick and Morty Character Explorer

A React application built with Vite that allows users to explore characters from the Rick and Morty universe. The application fetches data from the Rick and Morty API and presents it in an interactive interface.

## Features

- *Character List*: Browse through a comprehensive list of characters from the show
- *Character Details*: View detailed information about each character including:
  - Name
  - Species
  - Status
  - Gender
  - And more!
- *Responsive Design*: Fully responsive interface that works on both desktop and mobile devices
- *Dynamic Routing*: Seamless navigation between character list and individual character pages

## Tech Stack

- *Frontend Framework*: React
- *Build Tool*: Vite
- *Routing*: React Router
- *Styling*: CSS
- *API*: Rick and Morty API
- *Deployment*: Vercel

## Project Structure


.vite-project/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vercel.json
├── vite.config.js
├── public/
│   └── vite.svg
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── Show.jsx
    └── assets/
        └── react.svg


## Prerequisites

Before running the project, ensure you have:

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

## Getting Started

1. *Clone the repository*
   bash
   git clone [<repository-url>](https://github.com/prateek959/Daily-Task)
   cd .vite-project
   

2. *Install dependencies*
   bash
   npm install
   

3. *Start the development server*
   bash
   npm run dev
   

4. *Open your browser*
   Navigate to https://daily-task-pearl.vercel.app/ to view the application

## Available Scripts

- npm run dev - Starts the development server
- npm run build - Creates a production build
- npm run preview - Previews the production build locally

## Deployment

This project is configured for deployment on Vercel. The vercel.json configuration file is included in the repository.

To deploy:

1. Push your code to a Git repository
2. Import your project to Vercel
3. Vercel will automatically detect the configuration and deploy your application

## API Reference

This project uses the [Rick and Morty API](https://rickandmortyapi.com/). The API provides data about characters, locations, and episodes from the show.

## Contributing

1. Fork the repository
2. Create a new branch (git checkout -b feature/improvement)
3. Make your changes
4. Commit your changes (git commit -am 'Add new feature')
5. Push to the branch (git push origin feature/improvement)
6. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Rick and Morty API for providing the data
- React and Vite communities for the excellent documentation
- All contributors who help improve this project