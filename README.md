# Companies Directory

A React application for browsing and filtering company information, built with Vite, React, and Tailwind CSS.

## 🌐 Live Demo

**[View Live Project →](https://companiesdirectory.onrender.com/)**

Experience the application in action, deployed and running on Render.


## Features

-  Responsive grid/table layout that adapts to screen size
-  Search companies by name
-  Filter by industry and location
-  Fast and efficient with client-side filtering
-  Sort by company name or employee count
-  Paginated results for better performance
-  Modern UI with Tailwind CSS
-  Accessible loading states and error handling



### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/Vikram9985/CompaniesDirectory.git
cd CompaniesDirectory
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Usage

### Filtering Companies

- Use the search box to filter companies by name
- Select an industry from the dropdown to filter by industry
- Select a location to filter by city
- Results update automatically as you type or change filters



### View Modes

The application automatically switches between:
- Grid view (default for smaller screens)
- Table view (automatically activates on larger screens)

## Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint the project
npm run lint

# Preview production build
npm run preview
```

## Project Structure

```
companies/
├── public/
│   └── companies.json    # Company data
├── src/
│   ├── components/       # React components
│   ├── hooks/           # Custom React hooks
│   ├── App.jsx          # Main application
│   └── main.jsx         # Entry point
└── package.json         # Dependencies and scripts
```

## Tech Stack

- [React](https://react.dev/) - UI Framework
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [ESLint](https://eslint.org/) - Code linting

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the LICENSE file for details.
