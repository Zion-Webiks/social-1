import exp from 'express';
const router = exp.Router();
router.post('/login', async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: 'I was way too lazy to change the default message',
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        });
    }
});
router.delete('/logout', async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: 'I was way too lazy to change the default message',
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        });
    }
});
export default router;
