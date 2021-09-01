import { useState } from 'react'

function onCalc (ab, o) {
    let a = parseInt(ab[0]), b = parseInt(ab[1]);
    switch (o) {
        case '+':
        return a + b;
        case '-':
        return a - b;
        case '*':
        return a * b;
        case '/':
        return a / b;
        case '%':
        return a % b; 
        default:
        return 0;
    }
}

const Maths = (props) => {
    const [c, setC] = useState('');
    setC(onCalc([props.a, props.b], props.sign));
    return (<div className='answer'>{c}</div>)
}


export default Maths