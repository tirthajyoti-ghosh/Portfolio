/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Tooltip = ({
    children, direction, delay, content,
}) => {
    let timeout;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, delay || 200);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div
            className="Tooltip-Wrapper"
            // When to show the tooltip
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {/* Wrapping */}
            {children}
            {active && (
                <div className={`Tooltip-Tip ${direction || 'top'}`}>
                    {/* Content */}
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
