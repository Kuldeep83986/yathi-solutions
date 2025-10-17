const express = require("express");
const cors = require("cors");
const DbConnect = require("./db");
const foodRouter = require("./routes/foodRouter");

const app = express();
app.use(cors())
app.use(express.json());

DbConnect();

app.get("/test", (req,res)=>{
    res.send({message:"this is testing api"})
})

app.use("/food", foodRouter);

app.listen(8080, () => console.log("server running at port 8080"));
