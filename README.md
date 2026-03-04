# Portfolio Project

This is a full-stack responsive portfolio website built with React (Vite) frontend and Node.js/Express backend. The design is premium, responsive across mobile, tablet, laptop, and large desktop screens, and includes animations, dark mode, and modern UI patterns.

## Features

- React with Vite
- Tailwind CSS with responsive utilities
- React Router DOM for routing
- Framer Motion animations
- SweetAlert2 for alerts
- Axios for HTTP requests
- Lucide React icons
- Sticky glassmorphism navbar with mobile menu
- Dark mode toggle
- Animated sections and page transitions
- Scroll progress indicator
- Contact form with backend API
- Backend validation and error handling
- Concurrent dev scripts

## Folder Structure

```
portfolio-project/
│
├── client/      # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── animations/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/      # Express backend
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── .env
│
└── package.json (root, uses concurrently)
```

## Installation

Make sure you have Node.js installed (v18+ recommended).

```bash
cd portfolio-project
npm run install-all
```

This will install dependencies in the root, then in the `client` and `server` directories.

## Running Locally

To start both frontend and backend concurrently:

```bash
npm start
```

- Frontend will run on http://localhost:3000
- Backend will run on http://localhost:5000 (proxy is configured so `/api` requests go there)

### Individual Scripts

- `npm run dev --prefix client` - start React development server
- `npm run start --prefix server` - start Express server
- `npm run build --prefix client` - build production frontend

## Environment Variables

In `server/.env` you can configure:

```
PORT=5000
```

## Deployment

- Build frontend: `npm run build --prefix client`
- Serve static files from `client/dist` with any static server or integrate with Node/Express in production.

## Notes

- The project uses Tailwind responsive utilities (sm, md, lg, xl, 2xl) for breakpoints.
- Mobile menu disables body scrolling and includes backdrop overlay.
- Dark mode persists per session and toggles icons.
- Contact form sends POST to `/api/contact` with validation.

Enjoy customizing your portfolio!
