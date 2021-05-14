import React, { } from 'react';

interface TextProps {
    readonly color: string;
}

const Text: React.FC<TextProps> = ({ children, color }) => {
    return (
        <>
            <p style={{
                color: color, //Key, Value 같아서 생략가능
                fontWeight: "bold"
            }}
            >
                {children}
            </p>
        </>
    );
}

export default Text;