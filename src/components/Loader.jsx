import React from "react";

const LoadingScreen = ({ isFading }) => {
    return (
        <div className={`loading-overlay ${isFading ? 'fade-out' : ''}`}>
            {/* *** ACTION REQUIRED ***
                Replace the src attribute below with the URL of your chosen GIF.
                The CSS in index.css sizes this to 100px x 100px via the .spinner class.
            */}
            <img
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHA4Z2FjODg4c3QwNjJqYXNvZGJkMmx5cTlxN2J3MWYzamljcTd2ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohhwfAa9rbXaZe86c/giphy.gif"
                alt="Loading animation"
                className="spinner"
                // Placeholder image URL in case you haven't added your GIF yet
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/100x100/1e1e1e/61ff33?text=LOADING";
                }}
            />
            <div className="loading-text">LOADING...</div>
        </div>
    );
};

export default LoadingScreen