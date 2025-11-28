import express from 'express';
import connectDB from './db/database.js';
import dotenv from 'dotenv';
import authRouter from './router/auth.router.js';
import caseDetailRouter from './router/caseDetail.router.js';
import { adminMiddleware, authMiddleware } from './middleware/middleware.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use('/api/auth', authRouter);
app.use('/api/case', authMiddleware, adminMiddleware, caseDetailRouter);
// app.use('/api/case', caseDetailRoutrer);

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);

})