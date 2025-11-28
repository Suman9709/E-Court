import mongoose from "mongoose";

const caseDetailFormSchema = new mongoose.Schema({

    caseTitle: {
        type: String,
        required: true
    },

    caseNumber: {
        type: String,
        required: true,
        unique: true
    },

    firNumber: {
        type: String,
        required: true

    },

    firYear: {
        type: String
    },

    courtName: {
        type: String,
        required: true
    },

    caseType: {
        type: String,
        required: true
    },

    policeStation: {
        type: String,
        required: true
    },

    district: {
        type: String,
        required: true
    },

    section: {
        type: String,
        required: true
    },

    accusedName: {
        type: String,
        required: true
    },

    accusedFathersName: {
        type: String,
    },

    informantName: {
        type: String
    },

    informantFathersName: {
        type: String
    },

    accusedAddress: {
        village: { type: String, trim: true },
        policeStation: { type: String, trim: true },
        district: { type: String, trim: true },
        mobileNumber: { type: String, trim: true },
    },

    informantAddress: {
        village: { type: String, trim: true },
        policeStation: { type: String, trim: true },
        district: { type: String, trim: true },
        mobileNumber: { type: String, trim: true },
    },
    caseDescription: {
        type: String,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true

    }
}, { timestamps: true });

const CaseDetail = mongoose.model("CaseDetail", caseDetailFormSchema);
export default CaseDetail;
