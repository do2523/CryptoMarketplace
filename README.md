# Crypto Marketplace
Crypto Marketplace is a cryptocurrency tracking and alert platform, offering a Robinhood-like interface for monitoring the crypto market.  This application allows users to visualize historical transaction data extracted from the blockchain and observe wallet activities.

*   **Frontend:**
    *   `React`:  A modular UI component system for building a dynamic and responsive frontend.
    *   `Typescript`: Ensures code safety and maintainability.
*   **Backend:**
    *   `Node.js`: Powers the server-side logic and API endpoints.
    *   `Express`: Simplifies API creation and routing.
    *   `PostgreSQL`:  A robust and performant database for storing application data.

## Features
*   **Market Overview:** Real-time prices and price changes for various cryptocurrencies.
*   **Transaction History:** Explore past transactions by reading data directly from the blockchain.
*   **Wallet Tracking:** Monitor transactions associated with specific wallets.
*   **Price Alerts:** Set custom ceiling and floor price alerts for your favorite cryptocurrencies.  Receive notifications when your defined thresholds are crossed.
*   **User-Friendly Interface:**  Clean and intuitive design inspired by Robinhood.

## Building
Make sure you have [node](https://nodejs.org/en/download) installed, if not you can download it from https://nodejs.org/en/download.

Clone the repository and go to the directory where the project is located.
```sh
git clone https://github.com/do2523/CryptoMarketplace.git
cd ./CryptoMarketplace
```

Enter the *frontend* directory and install all the dependencies needed for the server to run.
```sh
cd ./frontend
npm install
```

Now you can run the server in development mode from the *frontend* directory using:
```sh
npm run dev
```

## Contributing
To contribute, install the required dependencies from *Build* and clone the repository.
```sh
git clone git@github.com:do2523/CryptoMarketplace.git
```


## Disclaimer
This project is for informational purposes only and does not provide financial advice.  Trading cryptocurrencies involves substantial risk of loss.
