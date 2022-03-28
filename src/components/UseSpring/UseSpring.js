import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring'

const UseSpring = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!flip),
    })
    return (
        <animated.h1 style={props} className='text-6xl text-center font-bold mb-16'>hello</animated.h1>
    );
};

export default UseSpring;