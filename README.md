# nimfy-orderly

**nimfy-orderly** is a customized React SDK forked and adapted from the [Orderly React SDK](https://github.com/orderly-dev/orderly-web-sdk). It provides an intuitive and streamlined interface to interact with decentralized trading protocols, with customizations tailored for a specific company use case.

## Features & Customizations

- **Network and Testnet fixes:** Fixes for testnet "wrong network" issues improving multi-chain support.
- **UI/UX Improvements:**

  - Clickable app logo for better navigation
  - Darker "Connect Wallet" button for clearer call-to-action
  - Updated color scheme and logos aligned with company branding
  - Mobile bottom navigation bar for improved usability on small screens
  - Reorganized sidebar icons and market labels for better clarity

- **Removed unnecessary features:**

  - API key sections and pages removed to simplify the interface
  - Orderly branding elements removed or replaced with custom placeholders (e.g., "Coming soon" in rewards section)

- **Build & Deployment:**

  - Updated build process and fixed favicon issues
  - Configured allowed hosts for deployment
  - Support for PM2 process management with ecosystem configuration fixes

- **Chain filtering:** Enhanced chain filtering logic for improved user experience when selecting trading chains.

## ِDirect Run:

- Use ecosystem.config.js
- Or directly run through pm2:
  > pm2 start remix-serve --name YourAppName --env NODE_ENV=production --env PORT=3000 -- ./build/server/index.js

## Installation

```bash
git clone https://github.com/pydea-rs/nimfy-orderly.git
cd nimfy-orderly
npm install
```

## Usage

Start the development server:

```bash
npm start
```

Build for production:

```bash
npm run build
```

## Configuration

- Adjust `.env` variables or config files as needed to set up RPC endpoints, network parameters, and other environment-specific settings.
- Ensure allowed hosts are set properly for your deployment environment.

## Contributing

Contributions are welcome! Please open issues or pull requests for bug fixes and new features.

## License

This project inherits licensing terms from the original Orderly React SDK. Please refer to the original repository for full license details.
