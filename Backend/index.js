const express = require("express");
const connectToDB = require("./dbconfig/db");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 5007;

connectToDB();
const Auth_routes=require('./routes/Authroutes')


app.use("/api", taskRoutes);
app.use("/auth",Auth_routes);

app.listen(PORT, () => {
    console.log(`App started on ${PORT}`);
});
