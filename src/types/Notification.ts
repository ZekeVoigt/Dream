// src/types/Notification.ts
export interface Notification {
  id: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  createdAt: Date;
}
