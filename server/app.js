const server = require("express")
const cors = require("cors")
const mongoose =require("mongoose")
require("dotenv/config")

const app = server()

app.use(cors())
app.use(server.json());
mongoose 
 .connect(process.env.PW, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,})   
 .catch(err => console.log(err))

const indexRoute = require("./routes/home")
app.use("/",indexRoute)
const port = process.env.PORT || "1000"
app.listen(port)