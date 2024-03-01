import './App.css';
import { useState } from 'react';

function App() {

  let [color, setColor] = useState('#81c3d7');

  const changeColor = (bgColor) =>{
    setColor(bgColor)
  }

  return (
    <div className="App">
      <div style={{ backgroundColor: color, width: '100%', height: '100vh' }}>
        <div className='d-flex justify-content-center mb-5 fixed-bottom'>
          <div className='w-75 h-25 p-2 mt-3 rounded-pill bg-white d-flex justify-content-center'>

            <button className='btn px-5 py-4 rounded-pill mx-1' style={{ backgroundColor: '#669bbc' }} onClick={() => changeColor('#669bbc')}></button>

            <button className='btn px-5 py-4 rounded-pill mx-1' style={{ backgroundColor: '#e76f51' }} onClick={() => changeColor('#e76f51')}></button>

            <button className='btn px-5 py-4 rounded-pill mx-1' style={{ backgroundColor: '#127475' }} onClick={() => changeColor('#127475')}></button>
            
            <button className='btn px-5 py-4 rounded-pill mx-1' style={{ backgroundColor: '#a5be00' }} onClick={() => changeColor('#a5be00')}></button>

            <button className='btn px-5 py-4 rounded-pill mx-1' style={{ backgroundColor: '#4c956c' }} onClick={() => changeColor('#4c956c')}></button>

            <button className='btn px-5 py-4 rounded-pill mx-1' style={{ backgroundColor: '#e63946' }} onClick={() => changeColor('#e63946')}></button>

            <button className='btn px-5 py-4 rounded-pill mx-1' style={{ backgroundColor: '#9381ff' }} onClick={() => changeColor('#9381ff')}></button>

            <button className='btn px-5 py-4 rounded-pill mx-1' style={{ backgroundColor: '#415a77' }} onClick={() => changeColor('#415a77')}></button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
