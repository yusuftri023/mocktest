const express = require("express");
const app = express();
const PORT = 3300;
const path = require("path");
const router = require("./router");
const swaggerJSON = require("./api-doc.json");
const swaggerUI = require("swagger-ui-express");
const cookieparser = require("cookie-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/app/views"));
app.get("/", (req, res) => {
  res.render("index");
});
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON));
app.use(router);
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
