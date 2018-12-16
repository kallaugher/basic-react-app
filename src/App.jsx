import * as React from 'react';
import { hot } from 'react-hot-loader/root';

const baseClass = 'app';

const App = () => (
  <div className={baseClass}>
    Hello World
  </div>
);

export default hot(App);
