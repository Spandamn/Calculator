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
    console.log(props.sign)
    console.log(props)
    let c = onCalc([props.a.value, props.b.value], props.sign);
    return (<div className='answer'>{c}</div>)
}

Maths.defaultProps = {
    a: {value: '0'},
    b: {value: '0'},
    sign: '+',
};

export default Maths