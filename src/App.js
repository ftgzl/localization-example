import './App.css';

import { useState, useEffect } from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl'

const messages = {
  "en-US": {
    title: "Hello World",
    description: "Life is beautiful."
  },
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "Hayat güzel."
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
          id="title"
        />
      </p>
      <br />
      <p>
        <FormattedMessage
          id="description"
        />
      </p>
      <br/><br/>
      <button onClick={() => setLocale('tr-TR')}>TR</button>
      <button onClick={() => setLocale('en-US')}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
