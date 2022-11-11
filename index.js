import express from "express";
import cors from "cors";
import ProductRoute from "./routes/productRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(ProductRoute);

app.listen(5000, () => console.log("server running on port 5000"));
