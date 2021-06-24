// Оптимизация хука useCallback
//rsc

import React from 'react';

export const Test = () => {
    const handleClick = () => {
        console.log("meow");
    }
    return (
        <div>
            <button onClick={handleClick}>Тестовая кнопка</button>
        </div>
    );
};
