import React from "react";
import TitleBar from "../components/TitleBar";
// import NavigationMenu from "../components/NavigationMenu";

const HomePage: React.FC = () => {
    return (
        <>
            {/* Video Background - Only on Home Page */}
            <div className="video-background-container">
                <video
                    className="video-background"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: -1,
                        objectFit: "cover",
                    }}
                >
                    <source
                        src="/rsubedi-web-project/glacier.mp4"
                        type="video/mp4"
                    />
                    {/* Fallback to background image if video fails to load */}
                </video>
            </div>

            <div
                style={{
                    lineHeight: "1.6",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                }}
            >
                <TitleBar title="Rikesh Subedi" size="large" />
                {/* <div
                    style={{
                        width: "50%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <NavigationMenu />
                </div> */}
            </div>
        </>
    );
};

export default HomePage;
