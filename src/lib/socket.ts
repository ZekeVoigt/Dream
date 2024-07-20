import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Change this to your frontend URL
    methods: ["GET", "POST"],
  },
});

app.use(cors());

io.on("connection", (socket: Socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("chat message", (msg: string) => {
    io.emit("chat message", msg);
  });
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
