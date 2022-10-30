const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('not kao right? damn? im so confused wat da hek is happebdubg');
});

router.post('/test', async (req, res) => {
    const name = req.body.name;

    if (!name)
        return res.status(400).json({
            message: 'no body received',
        });

    const greetingMsg = await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                greeting: `hello ${name}, nice to meet you!`,
            });
        }, 1000);
    });

    if (!greetingMsg)
        return res.status(400).json({
            message: 'something went wrong!',
        });

    return res.status(200).json(greetingMsg);
});

router.get('/get/:name', async (req, res) => {
    const name = req.params.name;
    try {
        const greetingMsg = await axios.post('http://localhost:3000/test', {
            name,
        });
        console.log(greetingMsg);
        if (!greetingMsg)
            return res
                .status(400)
                .json("cannot receive greeting message from '/name'");
        return res.status(200).json(greetingMsg.data);
    } catch (error) {
        res.status(400).json("cannot receive greeting message from '/name'");
    }
});

module.exports = router;
