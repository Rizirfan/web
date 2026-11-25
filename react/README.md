# React App

A React application built with Vite.

## Requirements

- Node.js and npm

## Run locally

1. Clone the repository and enter the project folder:

   ```sh
   git clone https://github.com/Rizirfan/react.git
   cd react
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open the local URL printed in the terminal (usually http://localhost:5173).

## Node.js and Express API

The Express API runs on port `4001`. In a second terminal, start it with:

```sh
npm run server
```

The Vite development server proxies `/api` requests to Express. Check the API at `http://localhost:4001/api/health`. For production, run `npm run build` and then `npm start`; Express serves the built app and API.

## Other commands

- `npm run build` creates a production build in `dist/`.
- `npm run preview` previews the production build locally.
- `npm run lint` checks the code with Oxlint.

