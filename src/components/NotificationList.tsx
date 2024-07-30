"use client";

import React from "react";
import { useNotification } from "../context/NotificationContext";

const NotificationList: React.FC = () => {
  const { notifications } = useNotification();

  return (
    <div className="notification-list">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`notification ${notification.type}`}
        >
          <p>{notification.message}</p>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
