const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mainRouter = require("./router/main.router.js");
const connectToDatabase = require("./database/database.js");

async function startExpress () {
  const app = express();
  const PORT = 5000;

  // middleware
  app.use(cors({ origin: "http://localhost:5173" }));
  app.use(bodyparser.json());
  mainRouter(app)
// Connection
//  app.use("/auth", authRouter);

  await connectToDatabase();
  app.listen(PORT, () =>
  console.log(`server is running on port http://localhost:${PORT}`)
);
}




(async () => { 
  await startExpress()
}) ()