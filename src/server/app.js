import express from "express";

const app = express();

app.get('*', (req, res) => {
  res.send(`Server check passed`)
})
app.listen(3000, ()=> {
  console.log(`server listen port 3000`)
})