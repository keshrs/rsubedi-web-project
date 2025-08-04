import React, { useState, useMemo, useCallback } from "react";

// Static data - moved outside component
const EVENTS_DATA = [
    {
        date: "2025-08-15",
        event: "Dog Band - Album Release Show",
        location: "San Francisco, CA",
        status: "Upcoming",
    },
    {
        date: "2025-06-15",
        event: "Dog Band - Local Venue",
        location: "San Francisco, CA",
        status: "Completed",
    },
    {
        date: "2025-04-20",
        event: "Dog Band - Local Bar Show",
        location: "Oakland, CA",
        status: "Completed",
    },
    {
        date: "2025-02-08",
        event: "Dog Band - House Party",
        location: "San Francisco, CA",
        status: "Completed",
    },
    {
        date: "2024-12-14",
        event: "Dog Band - Local Venue",
        location: "Oakland, CA",
        status: "Completed",
    },
    {
        date: "2024-10-05",
        event: "Dog Band - Local Venue",
        location: "San Francisco, CA",
        status: "Completed",
    },
    {
        date: "2024-08-15",
        event: "Dog Band - Local Venue",
        location: "Oakland, CA",
        status: "Completed",
    },
    {
        date: "2024-06-22",
        event: "Dog Band - Local Venue",
        location: "San Francisco, CA",
        status: "Completed",
    },
    {
        date: "2024-04-12",
        event: "Dog Band - Local Venue",
        location: "Oakland, CA",
        status: "Completed",
    },
    {
        date: "2024-02-03",
        event: "Dog Band - Local Venue",
        location: "San Francisco, CA",
        status: "Completed",
    },
    {
        date: "2023-12-16",
        event: "Dog Band - Local Venue",
        location: "Oakland, CA",
        status: "Completed",
    },
    {
        date: "2023-10-28",
        event: "Dog Band - Local Venue",
        location: "San Francisco, CA",
        status: "Completed",
    },
    {
        date: "2023-08-25",
        event: "Dog Band - First Show",
        location: "Oakland, CA",
        status: "Completed",
    },
    {
        date: "2023-06-10",
        event: "Box Factory - Final Show",
        location: "Richmond, VA",
        status: "Completed",
    },
    {
        date: "2023-04-15",
        event: "Box Factory - House Show",
        location: "Virginia Beach, VA",
        status: "Completed",
    },
    {
        date: "2023-02-18",
        event: "Box Factory - House Show",
        location: "Charlottesville, VA",
        status: "Completed",
    },
    {
        date: "2022-12-03",
        event: "Box Factory - House Show",
        location: "Richmond, VA",
        status: "Completed",
    },
    {
        date: "2022-10-22",
        event: "Box Factory - House Show",
        location: "Virginia Beach, VA",
        status: "Completed",
    },
    {
        date: "2022-08-13",
        event: "Box Factory - House Show",
        location: "Charlottesville, VA",
        status: "Completed",
    },
    {
        date: "2022-06-25",
        event: "Box Factory - Local Bar",
        location: "Richmond, VA",
        status: "Completed",
    },
    {
        date: "2022-04-15",
        event: "Box Factory - First Gig",
        location: "Richmond, VA",
        status: "Completed",
    },
];

// Static utility functions - moved outside component
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
            return "#059669";
        case "Upcoming":
            return "#a16207";
        default:
            return "#6b7280";
    }
};

const getSortIcon = (
    column: string,
    sortColumn: string,
    sortDirection: "asc" | "desc"
) => {
    if (sortColumn !== column) {
        return "▼▲";
    }
    return sortDirection === "asc" ? "▲" : "▼";
};

const EventsPage: React.FC = () => {
    const [sortColumn, setSortColumn] = useState<string>("date");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

    // Memoized sort handler
    const handleSort = useCallback(
        (column: string) => {
            if (sortColumn === column) {
                setSortDirection((prevDirection) =>
                    prevDirection === "asc" ? "desc" : "asc"
                );
            } else {
                setSortColumn(column);
                setSortDirection("asc");
            }
        },
        [sortColumn]
    );

    // Memoized sorted events
    const sortedEvents = useMemo(() => {
        return [...EVENTS_DATA].sort((a, b) => {
            let aValue: string | number;
            let bValue: string | number;

            switch (sortColumn) {
                case "date":
                    aValue = new Date(a.date).getTime();
                    bValue = new Date(b.date).getTime();
                    break;
                case "event":
                    aValue = a.event.toLowerCase();
                    bValue = b.event.toLowerCase();
                    break;
                case "location":
                    aValue = a.location.toLowerCase();
                    bValue = b.location.toLowerCase();
                    break;
                case "status":
                    aValue = a.status.toLowerCase();
                    bValue = b.status.toLowerCase();
                    break;
                default:
                    return 0;
            }

            if (sortDirection === "asc") {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });
    }, [sortColumn, sortDirection]);

    return (
        <div style={{ lineHeight: "1.6" }}>
            <h2>Events I've participated in:</h2>

            <div
                className="events-table-container"
                style={{ overflowX: "auto" }}
            >
                <table className="events-table">
                    <thead>
                        <tr
                            style={{
                                backgroundColor: "#f9fafb",
                                borderBottom: "2px solid #e5e7eb",
                            }}
                        >
                            <th
                                className={
                                    sortColumn === "date" ? "selected" : ""
                                }
                                onClick={() => handleSort("date")}
                            >
                                Date{" "}
                                {getSortIcon("date", sortColumn, sortDirection)}
                            </th>
                            <th
                                className={
                                    sortColumn === "event" ? "selected" : ""
                                }
                                onClick={() => handleSort("event")}
                            >
                                Event{" "}
                                {getSortIcon(
                                    "event",
                                    sortColumn,
                                    sortDirection
                                )}
                            </th>
                            <th
                                className={
                                    sortColumn === "location" ? "selected" : ""
                                }
                                onClick={() => handleSort("location")}
                            >
                                Location{" "}
                                {getSortIcon(
                                    "location",
                                    sortColumn,
                                    sortDirection
                                )}
                            </th>
                            <th
                                className={
                                    sortColumn === "status" ? "selected" : ""
                                }
                                onClick={() => handleSort("status")}
                            >
                                Status{" "}
                                {getSortIcon(
                                    "status",
                                    sortColumn,
                                    sortDirection
                                )}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedEvents.map((event, index) => (
                            <tr key={index}>
                                <td>{formatDate(event.date)}</td>
                                <td>{event.event}</td>
                                <td>{event.location}</td>
                                <td>
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
