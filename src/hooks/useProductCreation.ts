"use client";

import { useState, useEffect } from "react";
import { Notification } from "../types/Notification";
import { v4 as uuidv4 } from "uuid";

const useProductCreation = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const createProduct = async (productData: any) => {
    // Logic to create product
    // ...

    // Trigger notification for first product creation
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      {
        id: uuidv4(),
        message: "Congratulations on creating your first product!",
        type: "success",
        read: false,
        createdAt: new Date(),
      },
    ]);
  };

  return { createProduct, notifications };
};

export default useProductCreation;
