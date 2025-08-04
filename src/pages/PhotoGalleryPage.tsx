import React, { useState } from "react";
import { createPortal } from "react-dom";

const PHOTOS = [
    {
        src: "/src/assets/primary/scissor_bunny.GIF",
        alt: "Abstract rabbit silhouette with butterflies",
        size: "large",
    },
    {
        src: "/src/assets/gallery/IMG_5628.jpeg",
        alt: "Scenic landscape photography",
        size: "medium",
    },
    {
        src: "/src/assets/gallery/IMG_3383.jpeg",
        alt: "Nature photography",
        size: "small",
    },
    {
        src: "/src/assets/gallery/IMG_1886.jpeg",
        alt: "Urban architecture",
        size: "large",
    },
    {
        src: "/src/assets/gallery/IMG_1864.jpeg",
        alt: "Street photography",
        size: "medium",
    },
    {
        src: "/src/assets/gallery/IMG_1751.jpeg",
        alt: "Portrait photography",
        size: "small",
    },
    {
        src: "/src/assets/gallery/IMG_1194.jpeg",
        alt: "Travel photography",
        size: "medium",
    },
    {
        src: "/src/assets/gallery/DSC_1744.JPG",
        alt: "Wildlife photography",
        size: "large",
    },
    {
        src: "/src/assets/gallery/DSC_1736.JPG",
        alt: "Macro photography",
        size: "small",
    },
    {
        src: "/src/assets/gallery/DSC_1582.JPG",
        alt: "Landscape vista",
        size: "medium",
    },
    {
        src: "/src/assets/gallery/DSC_1234.JPG",
        alt: "Cityscape view",
        size: "large",
    },
    {
        src: "/src/assets/gallery/DSC_1203.JPG",
        alt: "Abstract photography",
        size: "small",
    },
    {
        src: "/src/assets/gallery/DSC_1133.JPG",
        alt: "Documentary style",
        size: "medium",
    },
    {
        src: "/src/assets/gallery/DSC_0672.JPG",
        alt: "Fine art photography",
        size: "large",
    },
    {
        src: "/src/assets/gallery/DSC_0590.JPG",
        alt: "Street art",
        size: "small",
    },
    {
        src: "/src/assets/gallery/DSC_0535.JPG",
        alt: "Architectural detail",
        size: "medium",
    },
    {
        src: "/src/assets/gallery/DSC_0457.JPG",
        alt: "Natural light portrait",
        size: "large",
    },
    {
        src: "/src/assets/gallery/DSC_0317.JPG",
        alt: "Environmental portrait",
        size: "small",
    },
    {
        src: "/src/assets/gallery/DSC_0311.JPG",
        alt: "Candid moment",
        size: "medium",
    },
    {
        src: "/src/assets/gallery/DSC_0264.JPG",
        alt: "Studio portrait",
        size: "large",
    },
    {
        src: "/src/assets/gallery/DSC_0164.JPG",
        alt: "Close-up detail",
        size: "small",
    },
    {
        src: "/src/assets/gallery/DSC_0128.JPG",
        alt: "Composition study",
        size: "medium",
    },
    {
        src: "/src/assets/gallery/DSC_0064.JPG",
        alt: "Light and shadow",
        size: "large",
    },
    {
        src: "/src/assets/gallery/DSC_0023.JPG",
        alt: "Texture and pattern",
        size: "small",
    },
    {
        src: "/src/assets/gallery/DSC_0017.JPG",
        alt: "Mood and atmosphere",
        size: "medium",
    },
];

const PhotoGalleryPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<
        (typeof PHOTOS)[0] | null
    >(null);

    const openLightbox = (photo: (typeof PHOTOS)[0]) => {
        setSelectedImage(photo);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeLightbox();
        }
    };

    return (
        <div style={{ lineHeight: "1.6" }}>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gridAutoRows: "200px",
                    gap: "1rem",
                    padding: "1rem 0",
                }}
            >
                {PHOTOS.map((photo, index) => (
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
                        onClick={() => openLightbox(photo)}
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

            {/* Lightbox Modal */}
            {selectedImage &&
                createPortal(
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 1000,
                            padding: "2rem",
                        }}
                        onClick={handleOverlayClick}
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                                borderRadius: "8px",
                            }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>,
                    document.body
                )}
        </div>
    );
};

export default PhotoGalleryPage;
