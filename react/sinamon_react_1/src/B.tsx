import React, { } from 'react';
import Text from './Text';
import { useNum } from './Hooks/useNum';
import { Link } from 'react-router-dom';

const B: React.FC = () => {
    const [num] = useNum()!!;
    return (
        <>
            <Text color="red">{num}</Text>
            <Link to ="/">A 페이지 이동</Link>
        </>
    );
}

export default B;