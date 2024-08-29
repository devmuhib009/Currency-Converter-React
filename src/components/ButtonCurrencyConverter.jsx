import React, { useState } from 'react';

function ButtonCurrencyConverter({ outputText, converterTitle, bgColor }) {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleConvert = async () => {
    setIsLoading(true);
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`);
    const data = await res.json();
    if (toCur === fromCur) {
        setConverted(amount);
        setIsLoading(false); 
        return
    };
    setConverted(data.rates[toCur].toFixed(2));
    setIsLoading(false);
    console.log(isLoading);
  };

  return (
    <div className="converter-container" style={{ backgroundColor: bgColor }}>
      <h1>{converterTitle}</h1>
      <div className="converter-input">
        <input
          type="number"
          value={amount}
          placeholder="Enter amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={fromCur} onChange={(e) => setFromCur(e.target.value)} disabled={isLoading}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>
        <span>to</span>
        <select value={toCur} onChange={(e) => setToCur(e.target.value)} disabled={isLoading}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>
        <button onClick={handleConvert} disabled={isLoading}>Convert</button>
      </div>
      <div className="converter-output">
        <h2>{outputText}</h2>
        <p>{converted} {toCur}</p>
      </div>
    </div>
  );
}

export default ButtonCurrencyConverter;
