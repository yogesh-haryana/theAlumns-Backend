const express = require("express");
const router = express.Router();

const adminRouter = express.Router();

const { getAlumnsProfiles, postAlumnsProfilesToVerification, getProfilesToVerify, postProfilesToAlumnsCollection, deleteVerifiedProfile } = require("../controllers/controllers");

router.route("/").get(getAlumnsProfiles);
router.route("/").post(postProfilesToAlumnsCollection);

adminRouter.route("/").get(getProfilesToVerify);
adminRouter.route("/").post(postAlumnsProfilesToVerification);
adminRouter.route("/:id").delete(deleteVerifiedProfile);

module.exports = { router, adminRouter };
