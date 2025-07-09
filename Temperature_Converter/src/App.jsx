import { useState } from 'react';
import CelsiusInput from './components/CelsiusInput';
import FahrenheitInput from './components/FahrenheitInput';
import { toCelsius, toFahrenheit } from './utils/conversions';

function App() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (temp) => {
    setTemperature(temp);
    setScale('c');
  };

  const handleFahrenheitChange = (temp) => {
    setTemperature(temp);
    setScale('f');
  };

  const celsius = scale === 'f' ? toCelsius(temperature) : temperature;
  const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature;

  return (
    <div style={{position: 'absolute', top:'50%', left:'50%', transform: 'translate(-50%,-50%)', textAlign: 'center', marginTop: '40px' }}>
      <h2>Temperature Converter</h2>
      <CelsiusInput temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <FahrenheitInput temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
    </div>
  );
}

export default App;
