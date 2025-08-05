import React, { useState } from "react";
import { createPortal } from "react-dom";

// Import all gallery images
import scissorBunnyImage from "../assets/primary/scissor_bunny.GIF";
import img5628 from "../assets/gallery/IMG_5628.jpeg";
import img3383 from "../assets/gallery/IMG_3383.jpeg";
import img1886 from "../assets/gallery/IMG_1886.jpeg";
import img1864 from "../assets/gallery/IMG_1864.jpeg";
import img1751 from "../assets/gallery/IMG_1751.jpeg";
import img1194 from "../assets/gallery/IMG_1194.jpeg";
import dsc1744 from "../assets/gallery/DSC_1744.JPG";
import dsc1736 from "../assets/gallery/DSC_1736.JPG";
import dsc1582 from "../assets/gallery/DSC_1582.JPG";
import dsc1234 from "../assets/gallery/DSC_1234.JPG";
import dsc1203 from "../assets/gallery/DSC_1203.JPG";
import dsc1133 from "../assets/gallery/DSC_1133.JPG";
import dsc0672 from "../assets/gallery/DSC_0672.JPG";
import dsc0590 from "../assets/gallery/DSC_0590.JPG";
import dsc0535 from "../assets/gallery/DSC_0535.JPG";
import dsc0457 from "../assets/gallery/DSC_0457.JPG";
import dsc0317 from "../assets/gallery/DSC_0317.JPG";
import dsc0311 from "../assets/gallery/DSC_0311.JPG";
import dsc0264 from "../assets/gallery/DSC_0264.JPG";
import dsc0164 from "../assets/gallery/DSC_0164.JPG";
import dsc0128 from "../assets/gallery/DSC_0128.JPG";
import dsc0064 from "../assets/gallery/DSC_0064.JPG";
import dsc0023 from "../assets/gallery/DSC_0023.JPG";
import dsc0017 from "../assets/gallery/DSC_0017.JPG";

const PHOTOS = [
    {
        src: scissorBunnyImage,
        alt: "Abstract rabbit silhouette with butterflies",
        size: "large",
    },
    {
        src: img5628,
        alt: "Scenic landscape photography",
        size: "medium",
    },
    {
        src: img3383,
        alt: "Nature photography",
        size: "small",
    },
    {
        src: img1886,
        alt: "Urban architecture",
        size: "large",
    },
    {
        src: img1864,
        alt: "Street photography",
        size: "medium",
    },
    {
        src: img1751,
        alt: "Portrait photography",
        size: "small",
    },
    {
        src: img1194,
        alt: "Travel photography",
        size: "medium",
    },
    {
        src: dsc1744,
        alt: "Wildlife photography",
        size: "large",
    },
    {
        src: dsc1736,
        alt: "Macro photography",
        size: "small",
    },
    {
        src: dsc1582,
        alt: "Landscape vista",
        size: "medium",
    },
    {
        src: dsc1234,
        alt: "Cityscape view",
        size: "large",
    },
    {
        src: dsc1203,
        alt: "Abstract photography",
        size: "small",
    },
    {
        src: dsc1133,
        alt: "Documentary style",
        size: "medium",
    },
    {
        src: dsc0672,
        alt: "Fine art photography",
        size: "large",
    },
    {
        src: dsc0590,
        alt: "Street art",
        size: "small",
    },
    {
        src: dsc0535,
        alt: "Architectural detail",
        size: "medium",
    },
    {
        src: dsc0457,
        alt: "Natural light portrait",
        size: "large",
    },
    {
        src: dsc0317,
        alt: "Environmental portrait",
        size: "small",
    },
    {
        src: dsc0311,
        alt: "Candid moment",
        size: "medium",
    },
    {
        src: dsc0264,
        alt: "Studio portrait",
        size: "large",
    },
    {
        src: dsc0164,
        alt: "Close-up detail",
        size: "small",
    },
    {
        src: dsc0128,
        alt: "Composition study",
        size: "medium",
    },
    {
        src: dsc0064,
        alt: "Light and shadow",
        size: "large",
    },
    {
        src: dsc0023,
        alt: "Texture and pattern",
        size: "small",
    },
    {
        src: dsc0017,
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
