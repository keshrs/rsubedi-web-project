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
        icon: null,
    },
    {
        label: "Biography",
        route: "biography",
        icon: null,
    },
    {
        label: "Portfolio",
        route: "portfolio",
        icon: null,
    },
    {
        label: "Events",
        route: "events",
        icon: null,
    },
    {
        label: "Video Gallery",
        route: "videoGallery",
        icon: null,
    },
    {
        label: "Photo Gallery",
        route: "photoGallery",
        icon: null,
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
