import exp from 'express';
const router = exp.Router();
router.get('/', async (req, res) => {
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
router.post('/', async (req, res) => {
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
// query params: ?title=x&date=23/04/2015
router.get('/search', async (req, res) => {
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
router.get('/:id', async (req, res) => {
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
router.patch('/like/:id', async (req, res) => {
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
