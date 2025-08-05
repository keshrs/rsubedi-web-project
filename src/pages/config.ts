import React from "react";
import HomePage from "./HomePage";
import BiographyPage from "./BiographyPage";
import PortfolioPage from "./PortfolioPage";
import EventsPage from "./EventsPage";
import VideoGalleryPage from "./VideoGalleryPage";
import PhotoGalleryPage from "./PhotoGalleryPage";

// Import assets
import headshotImage from "../assets/primary/headshot.jpeg";
import scissorBunnyImage from "../assets/primary/scissor_bunny.GIF";

export interface PageConfig {
    title?: string;
    primaryImage?: string;
    component: React.ComponentType;
    description?: string;
    keywords?: string[];
}

export const pageConfig: Record<string, PageConfig> = {
    home: {
        component: HomePage,
        description: "Personal portfolio and blog",
        keywords: [
            "portfolio",
            "developer",
            "web development",
            "React",
            "TypeScript",
        ],
    },
    biography: {
        title: "Biography",
        primaryImage: headshotImage,
        component: BiographyPage,
        description: "Learn about Rikesh Subedi's background and journey",
        keywords: ["biography", "about", "background", "journey"],
    },
    portfolio: {
        title: "Portfolio",
        primaryImage: scissorBunnyImage,
        component: PortfolioPage,
        description: "View my latest projects and work",
        keywords: ["portfolio", "projects", "work", "development"],
    },
    events: {
        title: "Events",
        component: EventsPage,
        description: "Upcoming and past events",
        keywords: ["events", "conferences", "workshops", "meetups"],
    },
    videoGallery: {
        title: "Video Gallery",
        component: VideoGalleryPage,
        description: "Video content and presentations",
        keywords: ["videos", "presentations", "gallery"],
    },
    photoGallery: {
        title: "Photo Gallery",
        component: PhotoGalleryPage,
        description: "Photography and visual work",
        keywords: ["photos", "photography", "gallery", "visual"],
    },
};

export type PageKey = keyof typeof pageConfig;
