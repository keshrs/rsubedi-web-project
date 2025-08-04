import React, { useState } from "react";

const PortfolioPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const portfolioItems = [
        {
            type: "text",
            title: "E-commerce Platform",
            content:
                "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart functionality, and payment processing integration.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
        },
        {
            type: "image",
            title: "Mobile App Design",
            content:
                "A cross-platform mobile application for task management with intuitive UI/UX design.",
            image: "/src/assets/primary/headshot.jpeg",
            technologies: ["React Native", "Firebase", "Figma"],
        },
        {
            type: "text",
            title: "Data Visualization Dashboard",
            content:
                "Interactive dashboard for real-time data visualization and analytics. Includes customizable charts, filters, and export functionality.",
            technologies: ["D3.js", "React", "Python", "PostgreSQL"],
        },
        {
            type: "image",
            title: "Web Application",
            content:
                "Modern web application with responsive design and progressive web app features.",
            image: "/src/assets/background/hike_shot.jpeg",
            technologies: ["React", "TypeScript", "PWA", "CSS Grid"],
        },
        {
            type: "text",
            title: "API Development",
            content:
                "RESTful API service with comprehensive documentation, rate limiting, and authentication. Built with scalability and security in mind.",
            technologies: ["Express.js", "JWT", "Redis", "Swagger"],
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length
        );
    };

    const currentItem = portfolioItems[currentIndex];

    return (
        <div style={{ lineHeight: "1.6" }}>
            <div
                style={{
                    position: "relative",
                    maxWidth: "800px",
                    margin: "0 auto",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    overflow: "hidden",
                }}
            >
                {/* Carousel Content */}
                <div style={{ padding: "2rem" }}>
                    <h3>{currentItem.title}</h3>

                    {currentItem.type === "image" && currentItem.image && (
                        <div style={{ marginBottom: "1rem" }}>
                            <img
                                src={currentItem.image}
                                alt={currentItem.title}
                                style={{
                                    width: "100%",
                                    height: "300px",
                                    objectFit: "cover",
                                    borderRadius: "4px",
                                }}
                            />
                        </div>
                    )}

                    <p style={{ marginBottom: "1rem" }}>
                        {currentItem.content}
                    </p>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.5rem",
                        }}
                    >
                        {currentItem.technologies.map((tech, index) => (
                            <span
                                key={index}
                                style={{
                                    backgroundColor: "#3b82f6",
                                    color: "white",
                                    padding: "0.25rem 0.75rem",
                                    borderRadius: "16px",
                                    fontSize: "0.875rem",
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        position: "absolute",
                        top: "50%",
                        left: "0",
                        right: "0",
                        transform: "translateY(-50%)",
                        padding: "0 1rem",
                    }}
                >
                    <button
                        onClick={prevSlide}
                        style={{
                            backgroundColor: "rgba(0,0,0,0.7)",
                            color: "white",
                            border: "none",
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                            cursor: "pointer",
                            fontSize: "1.2rem",
                        }}
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextSlide}
                        style={{
                            backgroundColor: "rgba(0,0,0,0.7)",
                            color: "white",
                            border: "none",
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                            cursor: "pointer",
                            fontSize: "1.2rem",
                        }}
                    >
                        ›
                    </button>
                </div>

                {/* Dots Indicator */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "0.5rem",
                        padding: "1rem",
                    }}
                >
                    {portfolioItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                border: "none",
                                backgroundColor:
                                    index === currentIndex
                                        ? "#3b82f6"
                                        : "#e5e7eb",
                                cursor: "pointer",
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
