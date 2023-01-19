const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    name: String,
    email: String,
    programme: String,
    batch: String,
    company: {
        name: String,
        designation: String,
        location: String
    },
    photoURL: String
});

const verificationSchema = new mongoose.Schema({
    name: String,
    email: String,
    programme: String,
    batch: String,
    company: {
        name: String,
        designation: String,
        location: String
    },
    photoURL: String
});

const Profiles = mongoose.model("profiles", profileSchema);
const ProfilesToVerify =  mongoose.model("verification", verificationSchema);
module.exports = { Profiles, ProfilesToVerify };
