import React from "react";

const PhotoGalleryPage: React.FC = () => {
    const photos = [
        {
            src: "/src/assets/gallery/headshot.jpeg",
            alt: "Professional headshot",
            size: "large",
        },
        {
            src: "/src/assets/background/hike_shot.jpeg",
            alt: "Hiking adventure",
            size: "medium",
        },
        {
            src: "/src/assets/gallery/headshot.jpeg",
            alt: "Portrait shot",
            size: "small",
        },
        {
            src: "/src/assets/background/hike_shot.jpeg",
            alt: "Nature photography",
            size: "medium",
        },
        {
            src: "/src/assets/gallery/headshot.jpeg",
            alt: "Studio portrait",
            size: "large",
        },
        {
            src: "/src/assets/background/hike_shot.jpeg",
            alt: "Landscape view",
            size: "small",
        },
        {
            src: "/src/assets/gallery/headshot.jpeg",
            alt: "Candid moment",
            size: "medium",
        },
        {
            src: "/src/assets/background/hike_shot.jpeg",
            alt: "Outdoor scene",
            size: "large",
        },
        {
            src: "/src/assets/gallery/headshot.jpeg",
            alt: "Close-up shot",
            size: "small",
        },
    ];

    return (
        <div style={{ lineHeight: "1.6" }}>
            <h2>Photo Gallery</h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gridAutoRows: "200px",
                    gap: "1rem",
                    padding: "1rem 0",
                }}
            >
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        style={{
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: "8px",
                            cursor: "pointer",
                            transition: "transform 0.2s ease-in-out",
                            gridColumn:
                                photo.size === "large" ? "span 2" : "span 1",
                            gridRow:
                                photo.size === "large" ? "span 2" : "span 1",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.02)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                    >
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                bottom: "0",
                                left: "0",
                                right: "0",
                                background:
                                    "linear-gradient(transparent, rgba(0,0,0,0.7))",
                                color: "white",
                                padding: "1rem",
                                transform: "translateY(100%)",
                                transition: "transform 0.2s ease-in-out",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(0)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(100%)";
                            }}
                        >
                            <p style={{ margin: 0, fontSize: "0.875rem" }}>
                                {photo.alt}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGalleryPage;
