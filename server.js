const express = require("express");
const cors = require("cors");
const { prependListener } = require("process");
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Bienvenido a la API de David. "});
});
require("./app/routes/tutorial.routes.js")(app);

//const PORT = process.env.PORT || 3000;
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`El server está escuchando por el puerto ${PORT}`);
});