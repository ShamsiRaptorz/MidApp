import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Backend is running!" });
});

app.get("/api/data", (req, res) => {
    res.json({ status: "success", data: "Hello from backend API!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));