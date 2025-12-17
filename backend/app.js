const expressor = require("express");
const app = expressor();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Backend ready!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
