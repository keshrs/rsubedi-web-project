import React from "react";

interface TitleBarProps {
    title: string;
}

const TitleBar: React.FC<TitleBarProps> = ({ title }) => {
    return (
        <div className="title-bar">
            <img
                src="/src/assets/icons/compass.svg"
                alt="Compass Icon"
                className="title-icon"
            />
            <h1 className="page-title">{title}</h1>
        </div>
    );
};

export default TitleBar;
