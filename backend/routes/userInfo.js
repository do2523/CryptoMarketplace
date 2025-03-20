var pg = require('pg');
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());


var conString = process.env.databaseUrl;

var client = new pg.Client(conString);
client.connect(); 


app.get("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await client.query("SELECT * FROM crypto_users WHERE id = $1", [id]);
        console.log(result);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
