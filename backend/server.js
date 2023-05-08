require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const auctionRoutes = require("./routes/auctions");
const userRoutes = require("./routes/user");
// express app
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

// middleware
// used to parse the body of the request
app.use(express.json());
// app.use(morgan("combined"));
app.use(cors());
// display a html file when the root path is hit
// app.get("/", (req, res) => {
//   res.sendFile("./views/index.html", { root: __dirname });
// });

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse the raw data
app.use(bodyParser.raw());
// parse text
app.use(bodyParser.text());

app.use(bodyParser.json());

// used to parse the url
app.use((req, res, next) => {
  console.log(req.path, req.method);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// use the routes only when the following path is hit
app.use("/api/auction", auctionRoutes);
app.use("/api/user", userRoutes);

// connect to the database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port 4000");
    });
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));
