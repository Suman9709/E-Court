import express from 'express';
import { createCaseDetail, deleteCaseDetail, getcaseDetails, updateCaseDetail } from '../controller/caseDetail.controller.js';

const caseDetailRouter = express.Router();

caseDetailRouter.post('/createnewcase', createCaseDetail)
caseDetailRouter.get('/getcasedetails', getcaseDetails)
caseDetailRouter.put('/updatecasedetails/:caseId', updateCaseDetail)
caseDetailRouter.delete('/deletecasedetails/:caseId', deleteCaseDetail)


export default caseDetailRouter;