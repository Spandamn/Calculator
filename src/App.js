import Maths from './components/Maths'
import Fields from './components/Fields'
import Buttons from './components/Buttons'

function App() {
  let state = {
    a: {},
    b: {},
    sign: '+'
  };
  function onButtonClick (e) {
    state.sign = e.target.id;
  }
  function onChange (e) {
    let v = e.target.id;
    state[v] = e.target.value;
    App.div.Maths = <Maths state={state}/>;
  }

  return (
    <div className='App'>
      <Fields id='a' onChange={onChange}/> <br></br> <Buttons onClick={onButtonClick}/> <br></br> <Fields id='b' onChange={onChange}/> = <Maths />
    </div>
  );
}

export default App;
