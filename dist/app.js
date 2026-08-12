import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
const PORT = process.env.PORT;
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'server running'
    });
});
export default app;
//# sourceMappingURL=app.js.map