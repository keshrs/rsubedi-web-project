import React from "react";

interface NavigationMenuProps {
    onNavigate?: (route: string) => void;
    className?: string;
}

// Navigation buttons configuration
const navigationButtons = [
    {
        label: "Home",
        route: "home",
        icon: "🏠",
    },
    {
        label: "Biography",
        route: "biography",
        icon: "👤",
    },
    {
        label: "Portfolio",
        route: "portfolio",
        icon: "💼",
    },
    {
        label: "Events",
        route: "events",
        icon: "🎉",
    },
    {
        label: "Video Gallery",
        route: "videoGallery",
        icon: "🎥",
    },
    {
        label: "Photo Gallery",
        route: "photoGallery",
        icon: "📷",
    },
];

const NavigationMenu: React.FC<NavigationMenuProps> = ({
    onNavigate = (route) => console.log(`Navigate to ${route}`),
    className = "",
}) => {
    return (
        <nav className={`navigation-menu ${className}`}>
            {navigationButtons.map((button, index) => (
                <button
                    key={index}
                    className="nav-button"
                    onClick={() => onNavigate(button.route)}
                >
                    {button.icon && (
                        <span className="nav-icon">{button.icon}</span>
                    )}
                    {button.label}
                </button>
            ))}
        </nav>
    );
};

export default NavigationMenu;
