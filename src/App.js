import './App.css';

import { useState, useEffect } from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl'

const bicycleprice = 100
const dolarToTry = 8
const messages = {
  "en-US": {
    product: "Bicycle",
    description: "Has 2 wheel.",
    price: "{price}USD"
  },
  "tr-TR": {
    product: "Bisiklet",
    description: "2 tekerleği var.",
    price: "{price}TRY"
  }
}

function App() {
  const isLocale = localStorage.getItem("locale")
  const defaultLocale = isLocale ? isLocale : navigator.language
  const [locale, setLocale] = useState(defaultLocale)

  useEffect(() => {
    localStorage.setItem("locale", locale)
  }, [locale])

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
      <p>
        <FormattedMessage
          id="product"
        />
      </p>
      <p>
        <FormattedMessage
          id="description"
        />
      </p>
      <br/>
      <p>
        <FormattedMessage values={{price : 
          locale==="en-US" ? bicycleprice : bicycleprice * dolarToTry}}
          id="price"
        />
      </p>
      <br/>
      <button onClick={() => setLocale('tr-TR')}>TR</button>
      <button onClick={() => setLocale('en-US')}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
