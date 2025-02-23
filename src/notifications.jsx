import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEyeSlash } from "react-icons/fa";
import "./notifications.css";

export default function Notification() {
    const [notifications, setNotifications] = useState([
        { id: 1, message: "Nouvelle mise à jour disponible !", type: "info" },
        { id: 2, message: "Votre compte a été vérifié.", type: "success" },
        { id: 3, message: "Erreur de connexion, réessayez.", type: "danger" },
    ]);
    
    const removeNotification = (id) => {
        setNotifications(notifications.filter((notif) => notif.id !== id));
    };
    

    return (
        <div className="notification-container">
            {notifications.map((notif) => (
                <div key={notif.id} className={`alert alert-${notif.type} notification-item`}>
                    {notif.message}
                    <button className="close-btn" onClick={() => removeNotification(notif.id)}>
                        <FaEyeSlash />
                    </button>
                </div>
            ))}
        </div>
    );
}
