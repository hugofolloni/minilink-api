const express = require("express");
const database = require('./database')

const router = express.Router();

router.get("/tags", async (req, res) => {
    res.send(await database.query("SELECT * FROM Links"));
})

const replace = (str, oldArg, newArg) => {
    for(let i = 0; i < oldArg.length; i++) {
        if(str.includes(oldArg[i])){
            str = str.replace(oldArg[i], newArg[i]);
        }
    }
    return str;
}

router.get("/tags/:id", async (req, res) => {
    const query = replace('SELECT * FROM Links WHERE tag = "idToChange"', ["idToChange"], [req.params.id]);
    res.send(await database.query(query));
})

router.post("/create", async (req, res) => {
    const query = replace('INSERT INTO Links (url, tag) VALUES ("urlToChange", "tagToChange")', ["urlToChange", "tagToChange"], [req.body.url, req.body.tag]);
    res.send(await database.query (query));
})

module.exports = router;