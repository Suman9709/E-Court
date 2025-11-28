
import CaseDetail from "../model/caseDetailFormModel.js";


export const createCaseDetail = async (req, res) => {

    //check the user is loggedin or not
    // check the user role is admin  
    // if admin then only create case detail
    // check all the required filed of the case detail form is present or not 
    // now save the case detail in database


    try {
        const user = req.user

        if (!user) {
            return res.status(401).json({ message: "Unauthorized: Please login to create case detail" })
        }

        if (user.role !== 'admin') {
            return res.status(403).json({ message: "Forbidden: Only admin can create case detail" })
        }


        // const caseDetails = {
        //     caseTitle,
        //     caseNumber,
        //     firNumber,
        //     firYear,
        //     courtName,
        //     caseType,
        //     policeStation,
        //     district,
        //     section,
        //     accusedName,
        //     accusedFathersName,
        //     informantName,
        //     informantFathersName,

        //     accusedAddress: {
        //         village: accusedAddress?.village,
        //         policeStation: accusedAddress?.policeStation,
        //         district: accusedAddress?.district,
        //         mobileNumber: accusedAddress?.mobileNumber,
        //     },

        //     informantAddress: {
        //         village: informantAddress?.village,
        //         policeStation: informantAddress?.policeStation,
        //         district: informantAddress?.district,
        //         mobileNumber: informantAddress?.mobileNumber,
        //     },


        // } = req.body;




        // create new case detail

        const caseData = {
            ...req.body,
            createdBy: user._id
        };
        const newCaseDetail = await CaseDetail.create(caseData);

        res.status(201).json({
            success: true,
            message: "Case detail created successfully",
            data: newCaseDetail
        });

    } catch (error) {
        console.error("Error creating case:", error);
        res.status(500).json({
            success: false,
            message: "Error creating case detail",
            error: error.message
        });

    }
}

export const getcaseDetails = async (req, res) => {
    try {
        const { district, policeStation, caseNumber } = req.query;

        const filter = {};

        if (district) filter.district = district;
        if (policeStation) filter.policeStation = policeStation;
        if (caseNumber) filter.caseNumber = caseNumber;   // <— works alone

        const cases = await CaseDetail.find(filter);

        if (cases.length === 0) {
            return res.status(404).json({ message: "No case details found" });
        }

        res.status(200).json({
            success: true,
            count: cases.length,
            data: cases
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};


export const updateCaseDetail = async (req, res) => {
    try {
        const user = req.user;

        if (!user) {
            return res.status(401).json({ message: "Unauthorized: Please login to update case detail" })
        }

        if (user.role !== 'admin') {
            return res.status(403).json({ message: "Forbidden: Only admin can update case detail" })
        }

        const { caseId } = req.params;

        const updatedCaseDetail = req.body;

        if (!updatedCaseDetail || Object.keys(updatedCaseDetail).length === 0) {
            return res.status(400).json({ message: "Bad Request: No data provided to update" })
        }

        const updatedCase = await CaseDetail.findByIdAndUpdate(
            caseId,
            { $set: updatedCaseDetail },
            { new: true }
        )

        if (!updatedCase) {
            return res.status(404).json({ message: "Case detail not found" })
        }

        res.status(200).json({
            success: true,
            message: "Case detail updated successfully",
            data: updatedCase
        })
    } catch (error) {
        console.error("Error updating case detail:", error);
        res.status(500).json({
            success: false,
            message: "Server error while updating case detail",
            error: error.message
        });
    }
}

export const deleteCaseDetail = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(401).json({ message: "Unauthorized: Please login to delete case detail" })
        }

        if (user.role !== 'admin') {
            return res.status(403).json({
                message: "Forbidden: Only admin can delete case detail",
            })
        }

        const { caseId } = req.params;
        const deletedCase = await CaseDetail.findByIdAndDelete(caseId);

        if (!deletedCase) {
            return res.status(404).json({ message: "Case detail not found" })
        }

        res.status(200).json({
            success: true,
            message: "Case detail deleted successfully",
            data: deletedCase
        });
    } catch (error) {
        console.error("Error deleting case detail:", error);
        res.status(500).json({
            success: false,
            message: "Server error while deleting case detail",
            error: error.message
        });
    }
}