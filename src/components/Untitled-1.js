import Key from './Key'

const Keypad = (prop) => {
    let keys = [];
    for (let i = 1; i <= 9; i++) keys.push((<Key value={i} name={"" + i}/>));
    return (<div className="keypad" style={styling}>{keys}</div>)
    
}

const styling = {
    'height': '150px',
    'width': '120px',
    'backgroundColor': 'white',
    'borderRadius': '30px',
    'grid-template-columns': '1fr 1fr 1fr',
    'display': 'grid',
};

export default Keypad