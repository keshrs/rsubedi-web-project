import React, { useState } from "react";

const PORTFOLIO_ITEMS = [
    {
        id: 1,
        image: "/rsubedi-web-project/gallery/DSC_0128.JPG",
        title: "Nature Photography",
        description:
            "Especially in 2023 and 2024, I spent a lot of time in nature, while at the same time learning how to use a mirrorless camera. I've been a fan of photography for a long time, but until a few years ago I was nervous to experiment and intimidated by the technical aspects of the process. I've been trying to get better at it ever since, and I'm still learning a lot. Because personal travel tends to involve hiking, I've been able to get a lot of practice with landscape photography, and I've been able to capture some really beautiful images.",
        link: null,
    },
    {
        id: 2,
        image: "/rsubedi-web-project/gallery/IMG_5628.jpeg",
        title: "Street Photography",
        description:
            "A complement to my nature photography, I've been trying to get better at street photography. Since I live in San Francisco, most of this is of the city and surrounding areas. That being said, I've traveled to New York and Seattle a decent amount and done some photography in those cities as well.",
        link: null,
    },
    {
        id: 3,
        image: "/rsubedi-web-project/gallery/DSC_1133.JPG",
        title: "Music",
        description:
            "From my band's performances to personal work that hasn't seen the light of day, I've been making music off and on since I was a teenager. I started with bass guitar but have expanded to other instruments like synthesizers and my own voice. I'm a bit of a jack of all trades and master of none, but that's all ok because I'm having fun! I explore many many genres and also do some concert photography.",
        link: null,
    },
    {
        id: 4,
        image: "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/5X/1/e/4/b/1e4b633a8f92d63366d4028929caf83f0d767ab0.gif",
        title: "Programming",
        description:
            "I've done software engineering focused on interactive applications (especially games and AR/VR) with a focus on accessibility and user experience. Much of that in the past 5 years was at Roblox, where I led development of Focus Navigation, Roblox's keyboard navigation support, adding to and improving a React-based library by the same name that powers Roblox's console app and enables cross-platform input support. Built with Roblox's preferred technologies including React and Lua, emphasizing clean architecture and inclusive design principles. The library is open source and available on GitHub. Check out the links below for more information.",
        link: null,
        links: [
            {
                text: "GitHub Repository",
                url: "https://github.com/Roblox/focus-navigation",
            },
            {
                text: "Documentation",
                url: "https://roblox.github.io/focus-navigation-internal/",
            },
            {
                text: "DevForum Release",
                url: "https://devforum.roblox.com/t/focus-navigation-library-release-gamepad-and-keyboard-helpers-for-lua/3410716",
            },
            {
                text: "Desktop App Support",
                url: "https://devforum.roblox.com/t/introducing-gamepad-and-keyboard-support-for-the-desktop-app/3137096",
            },
        ],
    },
    {
        id: 5,
        image: "/rsubedi-web-project/portfolio/design.png",
        title: "Design",
        description:
            "Though I'm fairly new to design, I've been trying to get better at it. I've been doing some UI/UX design for my own projects, and I'm taking a few classes with UC Berkeley's Extension school to get up to speed! I've had a good amount of fun working on the engineering side of design systems, and I'm trying to get into the more creative side of design as well.",
        link: null,
    },
];

const PortfolioPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % PORTFOLIO_ITEMS.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? PORTFOLIO_ITEMS.length - 1 : prev - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div style={{ lineHeight: "1.6" }}>
            {/* Main Carousel */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "300px",
                    overflow: "hidden",
                    borderRadius: "12px",
                    marginBottom: "2rem",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Carousel Container */}
                <div
                    style={{
                        display: "flex",
                        width: `${PORTFOLIO_ITEMS.length * 100}%`,
                        height: "100%",
                        transform: `translateX(-${
                            (currentIndex * 100) / PORTFOLIO_ITEMS.length
                        }%)`,
                        transition: "transform 0.5s ease-in-out",
                    }}
                >
                    {PORTFOLIO_ITEMS.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                width: `${100 / PORTFOLIO_ITEMS.length}%`,
                                height: "100%",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "0 5%",
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                    maxWidth: "800px",
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                {isHovered && (
                    <>
                        <button
                            onClick={prevSlide}
                            style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: "60px",
                                backgroundColor: "rgba(0, 0, 0, 0.6)",
                                border: "none",
                                color: "white",
                                fontSize: "1.5rem",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "background-color 0.2s",
                                zIndex: 10,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor =
                                    "rgba(0, 0, 0, 0.8)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor =
                                    "rgba(0, 0, 0, 0.6)";
                            }}
                        >
                            ‹
                        </button>
                        <button
                            onClick={nextSlide}
                            style={{
                                position: "absolute",
                                right: 0,
                                top: 0,
                                bottom: 0,
                                width: "60px",
                                backgroundColor: "rgba(0, 0, 0, 0.6)",
                                border: "none",
                                color: "white",
                                fontSize: "1.5rem",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "background-color 0.2s",
                                zIndex: 10,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor =
                                    "rgba(0, 0, 0, 0.8)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor =
                                    "rgba(0, 0, 0, 0.6)";
                            }}
                        >
                            ›
                        </button>
                    </>
                )}
            </div>

            {/* Preview Strip */}
            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    padding: "1rem 0",
                    marginBottom: "2rem",
                }}
            >
                {PORTFOLIO_ITEMS.map((item, index) => (
                    <div
                        key={item.id}
                        style={{
                            width: "80px",
                            height: "60px",
                            position: "relative",
                            cursor: "pointer",
                            borderRadius: "6px",
                            overflow: "hidden",
                            border:
                                index === currentIndex
                                    ? "2px solid var(--primary-color)"
                                    : "2px solid transparent",
                            transition: "border-color 0.2s",
                        }}
                        onClick={() => goToSlide(index)}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                        {index === currentIndex && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: "rgba(91, 170, 250, 0.3)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <div
                                    style={{
                                        width: "8px",
                                        height: "8px",
                                        backgroundColor: "white",
                                        borderRadius: "50%",
                                    }}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Description Content */}
            <div
                style={{
                    height: "200px",
                    overflowY: "auto",
                    backgroundColor: "rgba(51, 82, 57, 0.8)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    border: "1px solid rgba(229, 231, 235, 0.3)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                }}
            >
                <h3
                    style={{
                        fontSize: "2rem",
                        marginBottom: "1rem",
                        fontWeight: "600",
                        color: "var(--text-color)",
                    }}
                >
                    {PORTFOLIO_ITEMS[currentIndex].title}
                </h3>
                <p
                    style={{
                        fontSize: "1.1rem",
                        lineHeight: "1.6",
                        marginBottom: "2rem",
                        opacity: 0.9,
                        color: "var(--text-color)",
                    }}
                >
                    {PORTFOLIO_ITEMS[currentIndex].description}
                </p>
                {PORTFOLIO_ITEMS[currentIndex].link && (
                    <a
                        href={PORTFOLIO_ITEMS[currentIndex].link}
                        target="_blank"
                        style={{
                            display: "inline-block",
                            padding: "0.75rem 1.5rem",
                            backgroundColor: "var(--secondary-color)",
                            color: "var(--foreground-color)",
                            textDecoration: "none",
                            borderRadius: "6px",
                            fontWeight: "500",
                            transition: "background-color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                                "var(--secondary-color-focus)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                                "var(--secondary-color)";
                        }}
                    >
                        View Project
                    </a>
                )}
                {PORTFOLIO_ITEMS[currentIndex].links && (
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.75rem",
                            marginTop: "1rem",
                        }}
                    >
                        {PORTFOLIO_ITEMS[currentIndex].links.map(
                            (link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-block",
                                        padding: "0.5rem 1rem",
                                        backgroundColor:
                                            "var(--secondary-color)",
                                        color: "var(--foreground-color)",
                                        textDecoration: "none",
                                        borderRadius: "6px",
                                        fontWeight: "500",
                                        fontSize: "0.875rem",
                                        transition: "background-color 0.2s",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "var(--secondary-color-focus)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "var(--secondary-color)";
                                    }}
                                >
                                    {link.text}
                                </a>
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PortfolioPage;
