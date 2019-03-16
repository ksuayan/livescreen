import React from 'react';
import './styles.css';

class Service {

  constructor() {
    console.log("Livescreen constructor()");
  }

  init() {
    console.log("Livescreen init()");
  }

}

const LiveScreen = () => (
    <div className="livescreen">Hello from LiveScreen</div>
);

export { Service };
export default LiveScreen;