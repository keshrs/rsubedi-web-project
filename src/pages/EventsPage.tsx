import React from "react";

const EventsPage: React.FC = () => {
    const events = [
        {
            date: "2024-03-15",
            event: "Tech Conference 2024",
            location: "San Francisco, CA",
            status: "Upcoming",
        },
        {
            date: "2024-02-28",
            event: "Web Development Workshop",
            location: "Online",
            status: "Completed",
        },
        {
            date: "2024-01-20",
            event: "React Meetup",
            location: "Seattle, WA",
            status: "Completed",
        },
        {
            date: "2024-04-10",
            event: "Open Source Summit",
            location: "Austin, TX",
            status: "Upcoming",
        },
        {
            date: "2024-05-05",
            event: "Design Systems Conference",
            location: "New York, NY",
            status: "Upcoming",
        },
        {
            date: "2024-06-15",
            event: "Developer Bootcamp",
            location: "Online",
            status: "Registration Open",
        },
    ];

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Completed":
                return "#10b981";
            case "Upcoming":
                return "#3b82f6";
            case "Registration Open":
                return "#f59e0b";
            default:
                return "#6b7280";
        }
    };

    return (
        <div style={{ lineHeight: "1.6" }}>
            <h2>Events</h2>

            <div
                style={{
                    overflowX: "auto",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                }}
            >
                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        minWidth: "600px",
                    }}
                >
                    <thead>
                        <tr
                            style={{
                                backgroundColor: "#f9fafb",
                                borderBottom: "2px solid #e5e7eb",
                            }}
                        >
                            <th
                                style={{
                                    padding: "1rem",
                                    textAlign: "left",
                                    fontWeight: "600",
                                    color: "#374151",
                                }}
                            >
                                Date
                            </th>
                            <th
                                style={{
                                    padding: "1rem",
                                    textAlign: "left",
                                    fontWeight: "600",
                                    color: "#374151",
                                }}
                            >
                                Event
                            </th>
                            <th
                                style={{
                                    padding: "1rem",
                                    textAlign: "left",
                                    fontWeight: "600",
                                    color: "#374151",
                                }}
                            >
                                Location
                            </th>
                            <th
                                style={{
                                    padding: "1rem",
                                    textAlign: "left",
                                    fontWeight: "600",
                                    color: "#374151",
                                }}
                            >
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event, index) => (
                            <tr
                                key={index}
                                style={{
                                    borderBottom: "1px solid #e5e7eb",
                                    backgroundColor:
                                        index % 2 === 0 ? "#ffffff" : "#f9fafb",
                                }}
                            >
                                <td
                                    style={{
                                        padding: "1rem",
                                        fontWeight: "500",
                                        color: "#374151",
                                    }}
                                >
                                    {formatDate(event.date)}
                                </td>
                                <td
                                    style={{
                                        padding: "1rem",
                                        color: "#374151",
                                    }}
                                >
                                    {event.event}
                                </td>
                                <td
                                    style={{
                                        padding: "1rem",
                                        color: "#6b7280",
                                    }}
                                >
                                    {event.location}
                                </td>
                                <td
                                    style={{
                                        padding: "1rem",
                                    }}
                                >
                                    <span
                                        style={{
                                            backgroundColor: getStatusColor(
                                                event.status
                                            ),
                                            color: "white",
                                            padding: "0.25rem 0.75rem",
                                            borderRadius: "16px",
                                            fontSize: "0.875rem",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {event.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EventsPage;
