import express from "express";
import routes from "./routes.js";
const app = express();

app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
  res.send("API de login e registro");
});

app.listen(3000, () => {
  console.log("listening on pr 3000");
});
