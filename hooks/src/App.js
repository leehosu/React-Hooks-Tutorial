import React, { useState } from 'react';
import Counter from './Component/Counter';
import Info from './Component/Info';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <Counter />
      <div className = "visible">
        <button onClick = {() => {setVisible(!visible);}} >
          {visible ? '숨기기' : '보이기'}
        </button>
      </div>
      <div className = "App-Info">
        {visible && <Info />}
      </div>
    </div>
  );
}

export default App;
