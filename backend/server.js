import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import { app,server } from "./socket/socket.js";
import Connection from "./db/connecttoMongoose.js";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)


// app.get("/", (req, res) => {
//   res.send("hello world!!!");
// });


server.listen(PORT, async () => {
Connection(),
console.log(`Server Running on port ${PORT}`)});
