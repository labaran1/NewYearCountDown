import React from 'react';
import './App.css';

import Countdown from './Component/CountDown'

function App() {
  const d = new Date();
  return (
<div>
  <h1> New Year Countdown</h1>
<Countdown/>

<h1 style={{marginTop:"20rem", fontSize:"10rem"}}>
  {d.getFullYear() + 1}
</h1>

</div>


   
  );
}

export default App;
