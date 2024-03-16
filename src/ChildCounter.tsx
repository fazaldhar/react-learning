import { memo, useEffect } from "react";

interface Props {
    counter: number;
    increment: () => void;
}

export const ChildCounter = memo(({ counter, increment }: Props) => {
    
    useEffect(() => {
        console.log('ChildCounter rendered');
    });
    
    return (
        <div className="child-counter">
            <h3>Child counter: {counter}</h3>
            <button onClick={increment}>Increament child counter</button>
        </div>
    )
});

