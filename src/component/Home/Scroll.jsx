import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Scroll = () => {
    const { pathname } = useLocation();
    const topRef = useRef(null);

    useEffect(() => {
        if (topRef.current) {
            topRef.current.scrollIntoView();
        }
    }, [pathname]);

    return <div ref={topRef} />;
};

export default Scroll;