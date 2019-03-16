import React from 'react';
import { render } from 'react-dom';
import LiveScreen, { Service } from '../../src';
import './local.css';

const svc = new Service();
svc.init();

const App = () => (
    <LiveScreen />
);

render(<App />, document.getElementById("root"));