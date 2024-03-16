import { useEffect, useState } from "react";

export const WindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        console.log('called useeffecct');
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        }
    }, []);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return (
        <div>
            <div>Window Dimensions</div>
            <b>Widht: {width}</b>
            <b>Height: {height}</b>
        </div>
    );
};