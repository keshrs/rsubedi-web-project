import React from "react";
import compassIcon from "../assets/icons/compass.svg";

interface TitleBarProps {
    title: string;
    onNavigate?: (route: string) => void;
    size?: "small" | "medium" | "large";
}

// Size configurations
const sizeConfig = {
    small: {
        iconSize: "4rem",
        titleSize: "2rem",
        gap: "1rem",
        padding: "0.25rem",
    },
    medium: {
        iconSize: "6rem",
        titleSize: "2.5rem",
        gap: "1rem",
        padding: "0.5rem",
    },
    large: {
        iconSize: "8rem",
        titleSize: "5rem",
        gap: "1.5rem",
        padding: "0.75rem",
    },
};

const TitleBar: React.FC<TitleBarProps> = ({
    title,
    onNavigate,
    size = "medium",
}) => {
    const handleClick = () => {
        if (onNavigate) {
            onNavigate("home");
        }
    };

    const config = sizeConfig[size];

    return (
        <div
            className="title-bar"
            onClick={handleClick}
            style={{
                cursor: onNavigate ? "pointer" : "default",
                transition: "opacity 0.2s ease",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: config.gap,
                padding: config.padding,
            }}
        >
            <img
                src={compassIcon}
                alt="Compass Icon"
                className="title-icon"
                style={{
                    width: config.iconSize,
                    height: config.iconSize,
                    transition: "transform 0.3s ease-in-out",
                }}
            />
            <h1
                className="page-title"
                style={{
                    fontSize: config.titleSize,
                    fontWeight: 700,
                    margin: 0,
                    color: "var(--text-color)",
                    textShadow: `
                        -1px -1px 0 #000,
                        1px -1px 0 #000,
                        -1px 1px 0 #000,
                        1px 1px 0 #000
                    `,
                }}
            >
                {title}
            </h1>
        </div>
    );
};

export default TitleBar;
