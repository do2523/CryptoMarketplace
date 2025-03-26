import yfinance as yf
import pandas as pd
import os
import matplotlib.pyplot as plt


if os.path.exists("sp500.csv"):
    sp500 = pd.read_csv("sp500.csv", index_col=0)
else:
    sp500 = yf.Ticker("^GSPC")
    sp500 = sp500.history(period="max")
    sp500.to_csv("sp500.csv")


sp500.index = pd.to_datetime(sp500.index)
# Plot closing price over time
plt.figure(figsize=(12, 6))
plt.plot(sp500.index, sp500["Close"], label="S&P 500 Closing Price", color='blue')
plt.xlabel("Date")
plt.ylabel("Closing Price (USD)")
plt.title("S&P 500 Closing Price Over Time")
plt.legend()
plt.grid(True)

# Show the plot
plt.show()