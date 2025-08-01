import express from "express";
import cors from "cors";
import contactRoute from "./routes/contact.js";

const app = express();
app.use(
  cors({
    origin: "https://sahilamberkar-portfolio.vercel.app",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/contact", contactRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
