import { FC } from 'react';

import CounterWidget from 'containers/templates/CounterWidget';


import './App.css';

const App: FC = () => (
  <div className="container">
    <header>
      <h1>ビーズカウンター</h1>
    </header>
    <CounterWidget />
  </div>
);

export default App;
