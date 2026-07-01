# Yahya Bouchak Portfolio

[![Portfolio](https://img.shields.io/badge/Portfolio-yahya.ink-000000?style=for-the-badge&logo=vercel)](https://yahya.ink)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7.3.6-646CFF?style=flat&logo=vite)](https://vitejs.dev)

> **Portfolio of Yahya Bouchak** — Junior AI Engineer specializing in Machine Learning, Computer Vision, NLP, Big Data, and Full-Stack Development.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun 1.x
- npm, yarn, pnpm, or bun

### Installation

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:8080 in your browser
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run linting
npm run lint
```

---

## 📁 Project Structure

```
.
├── src/
│   ├── assets/              # Static assets (images, etc.)
│   ├── components/          # React components
│   │   ├── ui/              # shadcn/ui components
│   │   └── *.tsx            # Custom components
│   ├── contexts/            # React Context providers
│   ├── data/                # Centralized data & translations
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── pages/               # Page components
│   ├── test/                # Test files
│   ├── App.tsx              # Root component
│   ├── index.css            # Global styles
│   └── main.tsx             # Entry point
├── public/                 # Static files (favicons, manifest, etc.)
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── package.json             # Dependencies
└── README.md                # This file
```

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19
- **Language**: TypeScript 5
- **Bundler**: Vite 7.3.6
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Features
- **State Management**: React Context API + React Query
- **Routing**: React Router v6
- **Internationalization**: Custom i18n with English/French support
- **Error Handling**: Custom ErrorBoundary with retry logic
- **PWA**: Progressive Web App support with service worker
- **SEO**: Optimized meta tags with OpenGraph and Twitter cards
- **Accessibility**: ARIA labels, keyboard navigation, focus states

### Development
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint
- **Type Checking**: TypeScript

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

The project is pre-configured for Vercel deployment. See `vercel.json` for configuration.

### Netlify

```bash
# Deploy to Netlify
netlify deploy --prod
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
VITE_GA_ID=your-google-analytics-id
VITE_API_BASE_URL=http://localhost:3000
```

### Theme & Language

The app supports:
- **Dark/Light mode** toggle (persisted in localStorage)
- **English/French** language toggle (persisted in localStorage)

---

## 🧪 Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm run test:watch
```

Tests are located in:
- `src/test/*.test.ts`
- `src/test/*.spec.ts`

---

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🤝 Contact

- **Email**: [mr.bouchakyahya@gmail.com](mailto:mr.bouchakyahya@gmail.com)
- **GitHub**: [@Bouchask](https://github.com/Bouchask)
- **LinkedIn**: [/in/yahyabouchak](https://linkedin.com/in/yahyabouchak)
- **Portfolio**: [yahya.ink](https://yahya.ink)

---

## 📄 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.

---

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev) - Next Generation Frontend Tooling
- [React](https://react.dev) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com) - Beautifully designed components
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [Lucide React](https://lucide.dev) - Beautiful & consistent icon toolkit

---

<sub>Made with ❤️ by [Yahya Bouchak](https://yahya.ink)</sub>

