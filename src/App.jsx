import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import Button from './components/Button';

const baseClass = 'app';

const App = () => (
  <div className={baseClass}>
    Hello World
    <Button text="test" />
  </div>
);

export default hot(App);
