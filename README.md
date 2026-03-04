# create-clean-next-js

[![npm version](https://img.shields.io/npm/v/create-clean-next-js.svg)](https://www.npmjs.com/package/create-clean-next-js)
[![npm downloads](https://img.shields.io/npm/dm/create-clean-next-js.svg)](https://www.npmjs.com/package/create-clean-next-js)
[![license](https://img.shields.io/npm/l/create-clean-next-js.svg)](https://github.com/sannuk79/npx-create-next-js-Cli-frontend-/blob/main/LICENSE)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/sannuk79/npx-create-next-js-Cli-frontend-/blob/main/LICENSE)

> 🚀 **Ultra-clean Next.js starter CLI** with Tailwind CSS, TypeScript, ESLint, and built-in payload validation.

---

## 📖 Table of Contents

- [Quick Start](#-quick-start)
- [Features](#-features)
- [What's Included](#-whats-included)
- [Installation](#-installation)
- [Usage](#-usage)
- [Payload Validation](#-payload-validation)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Tech Stack](#-tech-stack)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Quick Start

Create a new Next.js project in seconds:

```bash
npx create-clean-next-js myapp
cd myapp
npm run dev
```

| Command | Description |
|---------|-------------|
| `npx create-clean-next-js myapp` | ✅ Creates a new clean Next.js project |
| `npm install create-clean-next-js` | ❌ Don't install as a dependency |

---

## ✨ Features

- **Next.js 16** - Latest version with App Router
- **Tailwind CSS 3** - Utility-first CSS framework
- **TypeScript 5** - Strict mode enabled for type safety
- **ESLint 9** - Code quality and consistency
- **payload-guard-filter** - Pre-configured API validation
- **Zero Demo Files** - Clean, production-ready structure
- **Minimal Dependencies** - Lightweight (~180MB node_modules)
- **Git Initialized** - Auto-initializes git repository

---

## 📦 What's Included

Your new project will include:

```
myapp/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout component
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles with Tailwind
│   ├── lib/
│   │   └── payloadGuard.ts  # Pre-configured validation shapes
│   ├── components/          # Your custom components
│   └── types/               # TypeScript type definitions
├── .gitignore
├── eslint.config.mjs        # ESLint configuration
├── next.config.mjs          # Next.js configuration
├── package.json
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

---

## 📥 Installation

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **yarn** package manager

### Create New Project

```bash
# Using npx (recommended)
npx create-clean-next-js myapp

# Navigate to project
cd myapp

# Start development server
npm run dev
```

---

## 🔒 Payload Validation

Pre-defined validation shapes in `src/lib/payloadGuard.ts`:

```typescript
import { login, register, payload } from "@/lib/payloadGuard";

// API Route example
export async function POST(req: Request) {
  const body = await req.json();

  // Validate login payload - only allowed fields returned
  const safe = login(body);

  return Response.json({ data: safe });
}
```

### Available Shapes

| Shape | Fields |
|-------|--------|
| `login` | password, token, api_key |
| `register` | username, email, password |
| `payload` | data, message, value |

---

## 🏗️ Project Structure

### `src/app/`
Next.js App Router pages and layouts.

### `src/components/`
Reusable React components (empty by default).

### `src/lib/`
Utility functions and payload validation guards.

### `src/types/`
TypeScript type definitions and interfaces.

---

## 📖 Available Scripts

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build production bundle
npm run start    # Start production server
npm run lint     # Run ESLint checks
```

---

## 🛠️ Tech Stack

| Package | Version | Description |
|---------|---------|-------------|
| **Next.js** | Latest | React framework |
| **React** | Latest | UI library |
| **TypeScript** | ^5 | Type safety |
| **Tailwind CSS** | ^3 | CSS framework |
| **ESLint** | ^9 | Code linting |
| **payload-guard-filter** | ^1.8.0 | API validation |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development

```bash
# Clone the repository
git clone https://github.com/sannuk79/npx-create-next-js-Cli-frontend-.git

# Navigate to project
cd create-clean-next

# Install dependencies
npm install

# Make your changes and test
```

---

## 📄 License

This project is licensed under the [MIT License](https://github.com/sannuk79/npx-create-next-js-Cli-frontend-/blob/main/LICENSE).

---

## 🔗 Links

- **[npm Package](https://www.npmjs.com/package/create-clean-next-js)**
- **[GitHub Repository](https://github.com/sannuk79/npx-create-next-js-Cli-frontend-)**
- **[Report Issues](https://github.com/sannuk79/npx-create-next-js-Cli-frontend-/issues)**

---

## 📞 Support

If you have any questions or need help:

- Open an issue on [GitHub](https://github.com/sannuk79/npx-create-next-js-Cli-frontend-/issues)
- Check existing documentation

---

<div align="center">

**Made with ❤️ by [sannuk79](https://github.com/sannuk79)**

If you like this project, please ⭐ star the repository!

</div>
