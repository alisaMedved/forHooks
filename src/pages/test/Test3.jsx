import React from 'react';

export const Test = () => {
    const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);
    // let numbersRef = {};
    const numbersRef = React.useRef();
    const ulRef = React.useRef();

    numbersRef.current = numbers;
    const addNumber = () => {
        setNumbers((prev) => [...prev, prev[prev.length - 1] + 1]);
    };

    const handleScroll = React.useCallback(() => {
        console.log('Был скролл! ', numbersRef);
    }, []);

    const start = () => {
        ulRef.current.addEventListener('scroll', handleScroll);
    };

    const stop = () => {
        ulRef.current.removeEventListener('scroll', handleScroll);
    };

    return (
        <div>
            <ul ref={ulRef} style={{height: 100, overflowY: "scroll", display: "block"}}>
                {numbers.map((n) => (
                    <li key={n}>{n}</li>
                ))}
            </ul>
            <button onClick={addNumber}>✅ Добавить число</button>
            <button onClick={start}>▶️ Старт</button>
            <button onClick={stop}>⏹ Стоп</button>
        </div>
    );
}

// весьма спорное решение лучше было решать эту проблему с помощью useEffect
//  проблема: требуется сохранение ссылки на функцию handleScroll, но при этом чтобы numbersRef
// эта функция выводила актуальный
// решить с помощью let не вариант - потребуется внести в зависимости useCallback да и решение это без useEffect не работающее
// здесь использован хак с useRef - но по мне правильнее и более четче читаемое и более контролируемое - это решение через useEffect

