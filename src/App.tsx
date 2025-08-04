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
        const path = pathname === "/" ? "home" : pathname.slice(1); // Remove leading slash

        // Check if the path exists in our page config
        if (path in pageConfig) {
            setCurrentPage(path as PageKey);
        } else {
            // Default to home if path doesn't exist
            setCurrentPage("home");
            // Update URL to reflect the actual page
            window.history.replaceState(null, "", "/");
        }
    }, []);

    // Function to handle navigation
    const handleNavigate = (page: string) => {
        if (page in pageConfig) {
            setCurrentPage(page as PageKey);
            const path = page === "home" ? "/" : `/${page}`;
            window.history.pushState(null, "", path);
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
