const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;


app.listen(PORT, (err) => {
    if(err) console.error(err);
    console.log(`now listening on port ${PORT}`);
});