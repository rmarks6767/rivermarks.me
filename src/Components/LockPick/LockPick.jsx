import React from 'react';

const LockPick = () => {
  console.log('hi');

  return (
    <div className="lock-picker">
      <div id="wrap">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/collar.png" alt="" id="collar" />
        <div id="cylinder" />
        <div id="driver" />
        <div id="pin">
          <div className="top" />
          <div className="bott" />
        </div>
      </div>
      <p>EXPERT LOCK</p>
      <p>
        <span>5</span>
        {' '}
        Bobby Pins Remaining
      </p>
      <div id="modal">
        <div id="win">
          <h1>Congratulations!</h1>
          <h2>By Jove, you've done it!</h2>
          <h3>You win: Nothing! Absolutely Nothing!</h3>
          <h4>Looks like you'll die alone and unfulfilled in the wasteland!</h4>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/success.png" alt="" />
        </div>
        <div id="lose">
          <h1>Oh Dear</h1>
          <h2>It seems you've run out of bobby pins.</h2>
          <h3>Looks like you'll die alone and unfulfilled in the wasteland.</h3>
          <h4>Better luck next time.</h4>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/failure.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LockPick;
