import React from 'react';

const Expression = () => {
    const title = 'Expression';
    const arry = ['item1', 'item2', 'item3'];
    const hello = arg => `${arg} Function`;
    const fn = () => 'hello';
    return (
        <>
            <h3>Hello {title}</h3>
            <h3>{hello('Hello')}</h3>
            <h3>{fn()}</h3>
        </>
    );
}

export default Expression;