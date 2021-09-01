import Key from './Key'

const Keypad = (prop) => {
    return (<div className="Keypad" style={styling} onClick={(e) => {return e.target.id !== 'del' ? prop.onKeyPress(e) : prop.onKeyDel(e)}}>
        <Key id='1'/>
        <Key id='2'/>
        <Key id='3'/>
        <Key id='4'/>
        <Key id='5'/>
        <Key id='6'/>
        <Key id='7'/>
        <Key id='8'/>
        <Key id='9'/>
        <Key id='0'/>
        <Key id='del' style={styling}/></div>)
}

const styling = {
    'height': '600px',
    'width': '480px',
    'backgroundColor': 'white',
    'borderRadius': '120px',
    'grid-template-columns': '1fr 1fr 1fr',
    'display': 'grid',
};

export default Keypad