import React, { useState, useCallback, useEffect } from "react";

const CursorTrail = () => {
    const [dots, setDots] = useState([]);

    const handleMouseMove = useCallback((e) => {
        const newDot = {
            id: Date.now(),
            x: e.clientX,
            y: e.clientY + window.scrollY,
            opacity: 1,
        };

        setDots(prevDots => {
            const updatedDots = [...prevDots.slice(-14), newDot];
            return updatedDots;
        });
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        const interval = setInterval(() => {
            setDots(prevDots =>
                prevDots
                    .map(dot => ({
                        ...dot,
                        opacity: dot.opacity - 0.05
                    }))
                    .filter(dot => dot.opacity > 0)
            );
        }, 50);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(interval);
        };
    }, [handleMouseMove]);

    return (
        <>
            {dots.map(dot => (
                <div
                    key={dot.id}
                    className="cursor-dot"
                    style={{
                        left: `${dot.x}px`,
                        top: `${dot.y}px`,
                        opacity: dot.opacity,
                    }}
                />
            ))}
        </>
    );
};

export default CursorTrail