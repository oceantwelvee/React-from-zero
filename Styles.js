import React, { useState } from 'react'
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter'

function App() {
  const [value, setValue] = useState("Tamerlan");
 
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1: JavaScript</strong>
          <div>
            JavaScript - язык программирование
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
