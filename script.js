function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    let convertedTemperature;
  
    if (unitSelect === 'celsius') {
      convertedTemperature = celsiusToFahrenheit(temperatureInput);
    } else if (unitSelect === 'fahrenheit') {
      convertedTemperature = fahrenheitToCelsius(temperatureInput);
    }
  
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${unitSelect.toUpperCase()}`;
  }
  
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  