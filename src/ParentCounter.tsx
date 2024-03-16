import { useCallback, useEffect, useState } from "react";
import { ChildCounter } from './ChildCounter.tsx';  


export const ParentCounter = () => {
    const [parentCounter, setParentCounter] = useState(0);
    const [childCounter, setChildCounter] = useState(0);

    const increamentParentCounter = useCallback(() => {
        setChildCounter(childCounter+1);
    }, [childCounter]);

    useEffect(() => {
        console.log('ParentCounter rendered');
    });
    
    return (
        <div className="parent-counter">
            <h3>Parent counter : {parentCounter}</h3>
            <button onClick={() => setParentCounter(parentCounter+1)}>Increment Parent Counter</button>
            <ChildCounter counter={childCounter} increment={increamentParentCounter}/>
        </div>
    );
}