import AutoCurrencyConverter from './components/AutoCurrencyConverter';
import ButtonCurrencyConverter from './components/ButtonCurrencyConverter';
import './App.css';

export default function App() {
  return (
    <>
      <div className="app-description">
        <h2>Currency Converter App</h2>
        <p>
          This Currency Converter app allows users to convert amounts between various currencies. 
          The app uses real-time exchange rates to provide accurate conversions. 
        </p>
        <h3>Props Accepted:</h3>
        <ul>
          <li><strong>outputText</strong>: Text to display the converted amount label.</li>
          <li><strong>converterTitle</strong>: Title for the converter section.</li>
          <li><strong>bgColor</strong>: Background color for the converter component.</li>
          <li><strong>btnText</strong>: Text for the convert button; if empty, auto conversion is enabled.</li>
          <li><strong>description</strong>: Brief description of the app.</li>
        </ul>
      </div>
      <AutoCurrencyConverter 
        outputText="Final Amount" 
        converterTitle="Auto Currency Converter" 
        bgColor="lightblue"
      />
      <ButtonCurrencyConverter 
        outputText="Final Amount" 
        converterTitle="Manual Currency Converter" 
        bgColor="lightgreen"
      />
    </>
  );
}
