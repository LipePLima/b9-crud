const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const { routes } = require("../routes/userRouter.js");

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json())

routes(app);

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});