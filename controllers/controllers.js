const { Profiles, ProfilesToVerify } = require("../modelAndSchema");
const ObjectId = require("mongodb").ObjectId;
// for getting alimns profiles data 

const getAlumnsProfiles = async(_, resp) => {
    const data = await Profiles.find({});
    resp.status(200).json(data);
}

// posting the form data to the database for verification By admin

const postAlumnsProfilesToVerification = async (req, resp) => {
    console.log("starts function");
    const data = new ProfilesToVerify(req.body);
    await data.save();
    resp.send(data);
}

// for admin Only 

const getProfilesToVerify = async (_, resp) => {
    const data = await ProfilesToVerify.find({});
    resp.status(200).json(data);
    console.log("Data get success for verification");
}

const postProfilesToAlumnsCollection = async (req, resp) => {
    const dataToBePost = new Profiles(req.body);
    console.log("data to be posted", dataToBePost);
    await dataToBePost.save();
    resp.status(200).json(dataToBePost);
    console.log("Data verified and posted successfully");
    }

const deleteVerifiedProfile = async(req, resp) => {
    const id = req.params.id;
    await ProfilesToVerify.findByIdAndDelete(ObjectId(id));
    resp.status(200);
}

module.exports = { getAlumnsProfiles, postAlumnsProfilesToVerification, getProfilesToVerify, postProfilesToAlumnsCollection, deleteVerifiedProfile };