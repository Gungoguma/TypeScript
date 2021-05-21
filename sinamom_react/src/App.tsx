import React, { useEffect, useState } from 'react';
import Text from './Text';

const App: React.FC = () => {
    const [num, setNum] = useState(1);


    const addNum = () => {
        setNum((prevnum) => prevnum + 1);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setNum((prevnum) => prevnum - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);
    return (
        <>
            <Text color="blue" onClick={addNum}>{num}</Text>
        </>
    );
}

export default App;