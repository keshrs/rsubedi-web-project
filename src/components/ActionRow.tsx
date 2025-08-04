import React from "react";

const ActionRow: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                gap: "1rem",
            }}
        >
            <button
                className="action-row-button"
                onClick={() => console.log("Cart clicked")}
            >
                {/* Cart Icon */}
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
            </button>
            <input
                type="text"
                placeholder="Search..."
                className="action-row-search"
                style={{
                    padding: "0.5rem 1rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.5rem",
                    outline: "none",
                    fontSize: "1rem",
                    minWidth: "200px",
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        console.log("Search submitted:", e.currentTarget.value);
                        e.currentTarget.value = "";
                    }
                }}
            />
        </div>
    );
};

export default ActionRow;
