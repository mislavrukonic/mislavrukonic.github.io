import React from "react";

const SimpleIconRenderer = ({ iconData, size = 28 }) => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        className="social-icon"
        dangerouslySetInnerHTML={{ __html: `<path d="${iconData.path}" fill="currentColor" />` }}
    />
);

export default SimpleIconRenderer;