//import Maths from './components/Maths'
//import Buttons from './components/Buttons'
import Keypad from './components/Keypad'
import Display from './components/Display'
import { useState } from "react"

function App() {
  const [display, setDisplay] = useState([])
  const onKeyPress = function (e) {
    setDisplay([...display, e.target.id]);
  }
  const onKeyDel = function (e) {
    setDisplay(display.splice(0, display.length - 1));
  }
  return (
    <div className='App'>
    {/*<input type='number' id='a' onChange={(e) => setA(e.target.value)}/> <br></br> 
      <Buttons onClick={onButtonClick}/> <br></br>
     <input type='number' id='b' onChange={(e) => setB(e.target.value)}/> = <Maths props={[a, b, sign]}/>*/}
     <Display  display={display}/>
     <Keypad onKeyDel={onKeyDel} onKeyPress={onKeyPress}/>
    </div>
  );
}

export default App;
