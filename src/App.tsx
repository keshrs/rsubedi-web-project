import React, { useState, useEffect } from "react";
import AppShell from "./components/AppShell";
import { pageConfig } from "./pages/config";
import type { PageKey } from "./pages/config";
import "./App.css";

function App() {
    const [currentPage, setCurrentPage] = useState<PageKey>("home");

    // Simple router effect that reads the URL pathname
    useEffect(() => {
        const pathname = window.location.pathname;

        // Handle GitHub Pages base path
        const basePath = "/rsubedi-web-project";
        let path = pathname;

        // Remove base path if it exists
        if (pathname.startsWith(basePath)) {
            path = pathname.slice(basePath.length);
        }

        // Handle 404.html redirect (GitHub Pages SPA fix)
        const redirect = window.location.search.match(/\?\/?(.*)/);
        if (redirect) {
            const redirectPath = redirect[1].split("?")[0];
            const cleanPath = redirectPath.replace(/~and~/g, "&");
            path = cleanPath.startsWith("/") ? cleanPath.slice(1) : cleanPath;
        }

        // Handle root path
        path = path === "/" ? "home" : path.slice(1); // Remove leading slash

        // Check if the path exists in our page config
        if (path in pageConfig) {
            setCurrentPage(path as PageKey);
        } else {
            // Default to home if path doesn't exist
            setCurrentPage("home");
            // Update URL to reflect the actual page
            const newPath = window.location.pathname.startsWith(basePath)
                ? `${basePath}/`
                : "/";
            window.history.replaceState(null, "", newPath);
        }
    }, []);

    // Function to handle navigation
    const handleNavigate = (page: string) => {
        if (page in pageConfig) {
            setCurrentPage(page as PageKey);
            const basePath = "/rsubedi-web-project";
            const path = page === "home" ? "/" : `/${page}`;
            const fullPath = window.location.pathname.startsWith(basePath)
                ? `${basePath}${path}`
                : path;
            window.history.pushState(null, "", fullPath);
        }
    };

    const pageData = pageConfig[currentPage];

    console.log(currentPage);

    // Apply background effects based on current page
    // TODO: remove this hack and try to use just CSS
    React.useEffect(() => {
        if (currentPage === "home") {
            document.body.classList.add("hide-background");
            document.documentElement.classList.add("hide-background");
            document.body.classList.remove("dimmed-background");
            document.documentElement.classList.remove("dimmed-background");
        } else {
            document.body.classList.remove("hide-background");
            document.documentElement.classList.remove("hide-background");
            document.body.classList.add("dimmed-background");
            document.documentElement.classList.add("dimmed-background");
        }
    }, [currentPage]);

    return (
        <div
            style={{
                backdropFilter: currentPage !== "home" ? "blur(2px)" : "none",
            }}
        >
            <AppShell
                title={pageData.title}
                primaryImage={pageData.primaryImage}
                onNavigate={handleNavigate}
            >
                <pageData.component />
            </AppShell>
        </div>
    );
}

export default App;
