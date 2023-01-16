import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json()); //poder fazer alteracoes post e put
app.use(cors()); //evitar conflitos no modo localhost

app.use("/", userRoutes); //acessar a rota criada do banco

app.listen(8800); //escutar essa porta
