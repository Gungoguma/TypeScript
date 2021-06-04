import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Text from './Text';
import { useNum } from './Hooks/useNum';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
    const [num, setNum] = useNum()!!;

    const plus = useMemo(() => num + 1, [num]);

    const addNum = useCallback(() => {
        setNum((prevnum) => prevnum + 1);
        console.log(plus);
    }, [plus, setNum])

    useEffect(() => {
        const timer = setInterval(() => {
            setNum((prevnum) => prevnum - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [setNum]);

    return (
        <>
            <Text color="blue" onClick={addNum}>{num}</Text>
            <Link to ="/b">B 페이지 이동</Link>
        </>
    );
}

export default App;