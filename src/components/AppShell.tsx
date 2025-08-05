import React, { useState } from "react";
import "./AppShell.css";
import NavigationMenu from "./NavigationMenu";
import TitleBar from "./TitleBar";
import ActionRow from "./ActionRow";

interface AppShellProps {
    children?: React.ReactNode;
    title?: string;
    primaryImage?: string;
    onNavigate?: (route: string) => void;
}

const AppShell: React.FC<AppShellProps> = ({
    children,
    title,
    primaryImage,
    onNavigate,
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const footerContent = (
        <div style={{ textAlign: "center" }}>
            <p>© 2025 Rikesh Subedi. All rights reserved.</p>
            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    marginTop: "0.5rem",
                }}
            >
                <a
                    href="https://www.linkedin.com/in/keshrs/"
                    target="_blank"
                    style={{ color: "#3b82f6" }}
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/keshrs"
                    target="_blank"
                    style={{ color: "#3b82f6" }}
                >
                    GitHub
                </a>
                <a
                    href="https://x.com/keshrs"
                    target="_blank"
                    style={{ color: "#3b82f6" }}
                >
                    Twitter
                </a>
            </div>
        </div>
    );

    return (
        <div className="app-shell">
            {/* Header */}
            <header
                className="app-header"
                style={{
                    justifyContent: !title ? "flex-end" : "space-between",
                }}
            >
                {title && <TitleBar title={title} onNavigate={onNavigate} />}
                {/* Desktop Action Row */}
                <div className="action-row desktop">
                    <ActionRow />
                </div>

                {/* Mobile Hamburger Menu */}
                <button
                    className="mobile-menu-button"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="mobile-menu-overlay" onClick={toggleMobileMenu}>
                    <div
                        className="mobile-menu-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="mobile-menu-close"
                            onClick={toggleMobileMenu}
                            aria-label="Close menu"
                        >
                            ×
                        </button>
                        <div className="action-row">
                            <ActionRow />
                        </div>
                        <div className="mobile-navigation">
                            <NavigationMenu
                                onNavigate={(route) => {
                                    onNavigate?.(route);
                                    setIsMobileMenuOpen(false);
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="app-main">
                {/* Desktop Layout */}
                <div className="desktop-layout">
                    {/* Left Side */}
                    <div className="left-content-container">
                        <div className="left-content">
                            {primaryImage && (
                                <div className="primary-image-container">
                                    <img
                                        src={primaryImage}
                                        alt="Profile"
                                        className="primary-image"
                                    />
                                </div>
                            )}
                            <NavigationMenu onNavigate={onNavigate} />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="right-content">
                        <div className="content-container">
                            {children && (
                                <div className="page-content">{children}</div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="mobile-layout">
                    {primaryImage && (
                        <div className="mobile-primary-image-container">
                            <img
                                src={primaryImage}
                                alt="Profile"
                                className="mobile-primary-image"
                            />
                        </div>
                    )}
                    {children && (
                        <div className="mobile-page-content">{children}</div>
                    )}
                </div>
            </main>

            {/* Footer */}
            {footerContent && (
                <footer className="app-footer">{footerContent}</footer>
            )}
        </div>
    );
};

export default AppShell;
