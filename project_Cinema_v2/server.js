const path = require("path");
const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const PORTA = 3000;


const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_NAME || "cinema",
});


app.use(express.static(path.join(__dirname, "public")));

// API: restituisce i film in sala in formato JSON
app.get("/api/film", async (req, res) => {
    try {
        const [righe] = await pool.query(
            `SELECT id, titolo, genere, anno,
                    img_locandina AS imgLocandina, link
             FROM film
             WHERE in_sala = TRUE
             ORDER BY anno DESC`
        );
        res.json(righe);
    } catch (errore) {
        console.error(errore);
        res.status(500).json({ errore: "Errore nel recupero dei film" });
    }
});

app.listen(PORTA, () => {
    console.log(`Server avviato su http://localhost:${PORTA}`);
});