const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
MONGODB_URI = "mongodb+srv://yogesh352:yogesh@cluster0.8jxcudq.mongodb.net/theAlumns?retryWrites=true&w=majority";

module.exports = mongoose.connect(MONGODB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log("success"))
.catch((error)=>console.log(error));