import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const port = 4040;

app.post("/get/name", (req, res) => {
  const data = req.body;
  let { name, email } = data;

  res.status(200).send({ message: "All names", data: name });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
