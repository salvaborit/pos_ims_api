const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const acquirerRoutes = require("./routes/acquirer");
const connectivityRoutes = require("./routes/connectivity");
const locationRoutes = require("./routes/location");
const makeRoutes = require("./routes/make");
const statusRoutes = require("./routes/status");
const terminalRoutes = require("./routes/terminal");

const db = require("./models");

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

const port = process.env.APP_PORT || 8080;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${port}`);
  db.sequelize
    .authenticate()
    .then(() => {
      console.log("Connection to database successful!");
    })
    .catch((err) => {
      console.error(`ERROR: connection to database failed:\n${err}`);
    });
});

app.use("/api/acquirer", acquirerRoutes);
app.use("/api/connectivity", connectivityRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/make", makeRoutes);
app.use("/api/status", statusRoutes);
app.use("/api/terminal", terminalRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Server running" });
});
