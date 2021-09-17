import './App.css';

import { useState } from 'react';
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
  const [lang, setLang] = useState("en-US")
  return (
    <div className="App">
      <IntlProvider messages={messages[lang]}>
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
      <button onClick={() => setLang('tr-TR')}>TR</button>
      <button onClick={() => setLang('en-US')}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
