import React from "react";
import { FaSoup } from "react-icons/fa"; // Using FaSoup as an example icon

import { FaUtensils } from 'react-icons/fa'; // You can change the icon if needed

const NotificationBanner = () => {
  return (
    <div className="flex items-center justify-center bg-orange-50 border-l-4 border-400 p-4">
      <FaUtensils className="mr-2 text-orange-500  text-3xl" />
      <span className="font-bold  text-2xl">
        Chefit service is available only in Gurugram.
      </span>
    </div>
  );
};

export default NotificationBanner;
