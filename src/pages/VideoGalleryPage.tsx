import React, { useState } from "react";

const VideoGalleryPage: React.FC = () => {
    const [expandedNotes, setExpandedNotes] = useState<number[]>([]);

    const videos = [
        {
            id: 1,
            title: "Dog Band - The Sun Shines For You",
            embedUrl: "https://www.youtube.com/embed/31LCJJl4EOg",
            notes: "This music video was the first public display of Dog Band, before the band had even played a show. I had just joined the band at this point and didn't participate in the recording, but it was an exciting selling point to join the band.",
        },
        {
            id: 2,
            title: "Fog Lake - Dakota",
            embedUrl: "https://www.youtube.com/embed/dhWV_eIDSQI",
            notes: "Fog Lake is one of the artists I frequently feel inspired by. I love the way they use decay and nostalgia in their music. This song is a perfect example of that, and the music video shows this combination visually. I always like to recommend Fog Lake to friends in search of new music, and you'll find songs scattered here and there across my playlists.",
        },
        {
            id: 3,
            title: "VESUVIUS II - Box Factory",
            embedUrl: "https://www.youtube.com/embed/Zo7-b6RRHls",
            notes: "Vesuvius II is Box Factory's latest single, and they're in the process of putting out a full-length album. Their music has progressed a long way since I left the band, and I'm still pals with the members, so it's always exciting to catch up with them and see what they're cooking up.",
        },
    ];

    const toggleNotes = (videoId: number) => {
        setExpandedNotes((prev) =>
            prev.includes(videoId)
                ? prev.filter((id) => id !== videoId)
                : [...prev, videoId]
        );
    };

    return (
        <div style={{ lineHeight: "1.6" }}>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "2rem",
                    padding: "2rem 0",
                }}
            >
                {videos.map((video) => (
                    <div
                        key={video.id}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                paddingBottom: "56.25%", // 16:9 aspect ratio
                                marginBottom: "1rem",
                            }}
                        >
                            <iframe
                                src={video.embedUrl}
                                title={video.title}
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    border: "none",
                                    borderRadius: "8px",
                                }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        <h3
                            style={{
                                marginBottom: "1rem",
                                textAlign: "center",
                                fontSize: "1.3rem",
                                fontWeight: "700",
                                color: "var(--text-color)",
                            }}
                        >
                            {video.title}
                        </h3>

                        <div
                            style={{
                                width: "100%",
                                overflow: "hidden",
                            }}
                        >
                            <button
                                onClick={() => toggleNotes(video.id)}
                                style={{
                                    width: "100%",
                                    padding: "1rem",
                                    backgroundColor: "#f9fafb",
                                    border: "1px solid #e5e7eb",
                                    cursor: "pointer",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    fontWeight: "500",
                                    color: "#374151",
                                    transition: "background-color 0.2s",
                                    borderRadius: expandedNotes.includes(
                                        video.id
                                    )
                                        ? "8px 8px 0 0"
                                        : "8px",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                        "#f3f4f6";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                        "#f9fafb";
                                }}
                            >
                                <span>Rikesh's Notes</span>
                                <span
                                    style={{
                                        fontSize: "1.2rem",
                                        transition: "transform 0.2s",
                                        transform: expandedNotes.includes(
                                            video.id
                                        )
                                            ? "rotate(180deg)"
                                            : "rotate(0deg)",
                                    }}
                                >
                                    ▼
                                </span>
                            </button>

                            {expandedNotes.includes(video.id) && (
                                <div
                                    style={{
                                        padding: "1rem",
                                        backgroundColor: "#ffffff",
                                        border: "1px solid #e5e7eb",
                                        borderTop: "none",
                                        color: "#6b7280",
                                        lineHeight: "1.6",
                                        borderRadius: "0 0 8px 8px",
                                    }}
                                >
                                    {video.notes}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoGalleryPage;
