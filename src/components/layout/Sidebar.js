import React from "react";
import { FaChevronCircleDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";

export const Sidebar = () => {
    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar_generic">
                <li>
                    <span>
                        <FaInbox />
                    </span>
                    <span>Inbox</span>
                </li>
                <li>
                    <span>
                        <FaRegCalendar />
                    </span>
                    <span>Today</span>
                </li>
                <li>
                    <span>
                        <FaRegCalendarAlt />
                    </span>
                    <span>Next 7 Days</span>
                </li>
            </ul>
            <div className="sidebar__midle">
                <span>
                    <FaChevronCircleDown />
                </span>
            </div>
            <ul className="sidebar__projects">Projects will be here</ul>
        </div>
    );
};

export default Sidebar;
