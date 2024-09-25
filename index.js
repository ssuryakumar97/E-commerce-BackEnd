import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import productRoute from "./routes/product.js"
import cors from "cors"

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB is connected successfully")).catch((err)=>{console.log(err)})

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoute);


app.listen(process.env.PORT || 3000, () => {
    console.log(`Backend server is running on port ${process.env.PORT}`)
})