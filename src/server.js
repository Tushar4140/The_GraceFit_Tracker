const express = require('express');
const app = express();
const { exec } = require('child_process');
app.get('/openWorkoutGenerator', (req, res) => {
    // Open the personalized workout generation project locally
    exec('npm run dev -- http://localhost:3000', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error opening personalized workout generation project: ${error.message}`);
            res.status(500).send('Internal Server Error');
            return;
        }
        console.log(`Personalized workout generation project is running: ${stdout}`);
        res.send('Personalized workout generation project is running.');
    });
});
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
