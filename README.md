# Big Oh! - A Timer/Stopwatch for CS50

A browser extension that provides timer and stopwatch functionality for CS50 problem sets, helping you track your time while working on assignments.

## Features

- ⏱️ Timer/Stopwatch functionality
- 🎯 Designed specifically for CS50 problem sets
- 🚀 Built with modern web technologies (React + WXT)

## Installation

### Development

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd big-oh-timer
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   bun install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or for Firefox
   npm run dev:firefox
   ```

4. Load the extension in your browser:
   - **Chrome/Edge**: Go to `chrome://extensions/`, enable "Developer mode", click "Load unpacked", and select the `.output/chrome-mv3` directory
   - **Firefox**: Go to `about:debugging#/runtime/this-firefox`, click "Load Temporary Add-on", and select the manifest file from `.output/firefox-mv2`

## Building

Build the extension for production:

```bash
npm run build
# or for Firefox
npm run build:firefox
```

Create a ZIP file for distribution:

```bash
npm run zip
# or for Firefox
npm run zip:firefox
```

## Development Scripts

- `npm run dev` - Start development server for Chrome
- `npm run dev:firefox` - Start development server for Firefox
- `npm run build` - Build for production (Chrome)
- `npm run build:firefox` - Build for production (Firefox)
- `npm run zip` - Create ZIP file for Chrome
- `npm run zip:firefox` - Create ZIP file for Firefox
- `npm run compile` - Type-check TypeScript files

## Technologies

- **[WXT](https://wxt.dev)** - Browser extension framework
- **[React](https://react.dev)** - UI library
- **[TypeScript](https://www.typescriptlang.org)** - Type safety

## Project Structure

```
big-oh-timer/
├── entrypoints/
│   ├── background.ts      # Background script
│   ├── content.ts         # Content script (runs on CS50 pages)
│   └── popup/             # Extension popup UI
│       ├── App.tsx        # Main React component
│       └── main.tsx       # React entry point
├── public/                # Static assets
│   └── icon/             # Extension icons
├── assets/                # Additional assets
└── wxt.config.ts         # WXT configuration
```

## License

Private project
