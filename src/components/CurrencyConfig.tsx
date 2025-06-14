import React, { useState } from 'react';
import './CurrencyConfig.css';

interface Currency {
  code: string;
  symbol: string;
  name: string;
  isDefault: boolean;
}

const CurrencyConfig: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([
    { code: 'NGN', symbol: '₦', name: 'Nigerian Naira', isDefault: true },
    { code: 'USD', symbol: '$', name: 'US Dollar', isDefault: false },
    { code: 'EUR', symbol: '€', name: 'Euro', isDefault: false },
    { code: 'GBP', symbol: '£', name: 'British Pound', isDefault: false },
  ]);

  const [selectedCurrency, setSelectedCurrency] = useState<string>('NGN');

  const handleSetDefault = (code: string) => {
    setCurrencies(currencies.map(currency => ({
      ...currency,
      isDefault: currency.code === code
    })));
  };

  const handleRemoveCurrency = (code: string) => {
    if (currencies.length > 1) {
      setCurrencies(currencies.filter(currency => currency.code !== code));
      if (selectedCurrency === code) {
        setSelectedCurrency(currencies[0].code);
      }
    }
  };

  return (
    <div className="currency-config">
      <div className="currency-header">
        <h2>Currency Configuration</h2>
        <p>Manage your preferred currencies and default currency settings</p>
      </div>

      <div className="currency-list">
        {currencies.map((currency) => (
          <div key={currency.code} className="currency-item">
            <div className="currency-info">
              <span className="currency-symbol">{currency.symbol}</span>
              <div className="currency-details">
                <h3>{currency.name}</h3>
                <span className="currency-code">{currency.code}</span>
              </div>
            </div>
            <div className="currency-actions">
              {!currency.isDefault && (
                <button
                  className="action-button default"
                  onClick={() => handleSetDefault(currency.code)}
                >
                  Set as Default
                </button>
              )}
              {currency.isDefault && (
                <span className="default-badge">Default</span>
              )}
              {currencies.length > 1 && (
                <button
                  className="action-button remove"
                  onClick={() => handleRemoveCurrency(currency.code)}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="currency-selector">
        <h3>Select Display Currency</h3>
        <select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          className="currency-select"
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.code} - {currency.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyConfig; 