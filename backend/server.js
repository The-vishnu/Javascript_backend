import express from "express";
import configDotenv from "dotenv";

configDotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("🚀 Server is running...");
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});