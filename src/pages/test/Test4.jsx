import React from 'react';


const Buttons = React.memo(({ onPlus, onMinus }) => {
    console.log('Buttons render');

    return (
        <div>
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
        </div>
    );
});



export const Test = () => {
    const [count, setCounter] = React.useState(0);

    const onPlus = React.useCallback(() => setCounter((count) => count + 1), []);

    const onMinus = React.useCallback(() => setCounter((count) => count - 1), []);

    return (
        <div className="App">
            <h1>{count}</h1>
            <Buttons onPlus={onPlus} onMinus={onMinus} />
        </div>
    );
}

