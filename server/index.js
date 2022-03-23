const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const app = express();
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");
const foodRoute = require("./routes/restArea");

app.use(
  cookieSession({
    name: "session",
    keys: ["james"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);
app.use("/api", foodRoute);

app.listen("5000", () => {
  console.log("server is running!!");
});
