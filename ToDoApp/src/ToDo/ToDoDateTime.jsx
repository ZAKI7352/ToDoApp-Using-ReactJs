import { useEffect, useState } from "react";
export const ToDoDateTime = () => {
    const [dateTime, setDateTime] = useState("");
    //ToDo Date Time
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString()
            const formattedTime = now.toLocaleTimeString()
            setDateTime(`${formattedDate} - ${formattedTime}`);
        }, 1000);
        return () => clearInterval(interval);

    }, []);

    return (
        <div>
            <h2 className="date-time">{dateTime}</h2>
        </div>
    )
}