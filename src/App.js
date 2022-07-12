//import logo from './logo.svg';
/* import invitation from './assets/invitation.webp'; */
import React from 'react';
import pop from './assets/pop.mp4';
import foot from './assets/foot.webp';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <video  muted autoPlay className="App-logo">
        <source
          src={pop}
          type="video/mp4"
        />
         Your browser does not support the video tag.
        </video>
      </header>
      <div className="maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831.6909078777674!2d-103.48141911548869!3d20.62210952575201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428abbb0d488c25%3A0x114e79d86b05a6f6!2sAv.%20Paseo%20Natura%20No.%2040%2C%20Coto%20Firenze%2C%20Natura%20Bosque%20Residencial%20lll!5e0!3m2!1ses-419!2smx!4v1657607405289!5m2!1ses-419!2smx" width="920" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <footer className="App-footer">
        <img src={foot} className="App-image" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
