const express = require("express");
const { json } = require("express");
require("./mongooseCongif");
const cors = require("cors");
const {router, adminRouter} = require("./routers/index");
const app = express();

const port = process.env.PORT || 8080;

app.use(json());
app.use(cors());
app.use("/api/theAlumns", router);
app.use("/api/admin", adminRouter);

const startServer = async () => {
    try {
        app.listen(port, () => {
            console.log("server started on port ", port);
        });
    }
    catch {
        console.log(e);
    }
}

startServer();

