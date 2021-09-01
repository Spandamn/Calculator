const Display = (prop) => {
    return (<div className='display' style={styling}>{prop.display.join('')}</div>)
}

const styling = {
    '@font-face': {
        'font-family': 'digital-7',
        'src': 'url(./digital-7.ttf)',
        'font-size': '100px',
    },
    'font-family': 'digital-7',
    'font-size': '100px',
    'width': '500px',
    'height': '120px',
    'padding': '10px',
    'border': '3px solid black',
    'margin': '15px',
    'text-align': 'right',
};

export default Display