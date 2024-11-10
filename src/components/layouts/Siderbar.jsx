/* eslint-disable no-unused-vars */
import React from "react";
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";

export const Siderbar = () => {
    return (
        <div className="sidebar" data-testid="siderbar">
            <ul className="sidebar_generic">
                <li><span><FaInbox/></span><span>Inbox</span></li>
                <li><span><FaRegCalendar/></span><span>Today</span></li>
                <li><span><FaRegCalendarAlt/></span><span>Next 7 days</span></li>
            </ul>
        </div>
    )
}