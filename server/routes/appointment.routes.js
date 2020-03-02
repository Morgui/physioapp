const express = require('express');
const router = express.Router();

/* GET appointment */
router.get('/', (req, res, next) => {
    res.json({ "listado": "de citas" });
});

module.exports = router;
